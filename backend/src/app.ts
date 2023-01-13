import express, { Application, Request, response, Response } from "express";
import * as dotenv from 'dotenv'
import { DB_URI, JWT_SECRET, PATHS, PORT } from "./const";
import * as bcrypt from 'bcrypt';
import { IUser, UserModel } from "./models/user";
import { db } from "./models";
import { AuthenticateUsers, VerifyUserEligible } from "./middleware/authenticate_users";
import * as jwt from 'jsonwebtoken'
import httpStatus from "http-status";
import { BlacklistedTokensModel } from "./models/blacklisted_tokens";
import { IAddToCartReq } from "./types/addtocart_req";
import { Document, Types } from "mongoose";
import { IBook } from "./models/book";
import { ICheckoutReq } from "./types/checkout_req";
import { IUserChangesReq } from "./types/userchanges_req";
import { IAddShippingAddressReq } from "./types/addshippingaddress_req";
dotenv.config()

const app = express();
app.use(express.json());
app.use(express.urlencoded());

db.mongoose.connect(DB_URI).then(() => {
  console.log(`DB connected at ${DB_URI}`)
}).catch((e) => {
  console.log(e)
  process.exit();
})

// signup route
app.post(PATHS.signup, VerifyUserEligible, async (req: Request, res: Response) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const user = new UserModel({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      accessLevel: 'user',
      dateJoined: Date.now(),
    });
    await user.save()
    res.status(httpStatus.OK).send(JSON.stringify(user.toJSON()))
  }
  catch {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send()
  }

})

// login route
app.post(PATHS.login, (req, res) => {
  const userEmail = req.body.email
  db.UserModel.findOne({
    email: userEmail
  }).exec((err, user) => {
    if (err) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
      return
    }
    if (!user) {
      res.status(httpStatus.NOT_FOUND).send("Failed!! user not found with given email")
      return;
    }

    if (bcrypt.compareSync(req.body.password, user.password)) {
      const userJWTPayload = {
        name: user.name,
        email: user.email,
        id: user.id,
        accessLevel: user.accessLevel,
        shippingAddresses: user.shippingAddresses,
        cart: user.cart
      }
      const accessToken = jwt.sign(userJWTPayload, JWT_SECRET)
      res.status(httpStatus.OK).send({
        ...userJWTPayload,
        accessToken
      })
      return;
    }
    else {
      res.status(httpStatus.UNAUTHORIZED).send("Failed!! incorrect username or password")
      return;
    }
  })
})

// logout route
// the function blacklists the issued auth token with which
// the logout was called on
app.delete(PATHS.logout, (req, res) => {
  try{
    const token = req.headers.authorization?.split(' ')[1]
    if (token) {
      const t = new BlacklistedTokensModel({
        token: token
      })
      t.save();
      res.status(200).send('Logged out successfully').redirect('/');
      return;
    }
  }
  catch(err){
    console.log(err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
    return;
  }
})

// test route to test the authentication middleware
app.get('/testroute', AuthenticateUsers, (req, res) => {
  const user: IUser = res.locals.user;
  console.log(res.locals.user)
  res.status(httpStatus.OK).send(JSON.stringify(user))
  return;
})

app.get(PATHS.books, AuthenticateUsers, async (req, res)=>{
  const perpage = 50;
  const pageNum = req.query.pageNum as unknown as number || 0;
  try {
    const results = await db.BookModel.find().skip(perpage * pageNum).limit(perpage)
    res.status(httpStatus.OK).send(JSON.stringify(results))
    return;
  }
  catch(err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
    return;
  }
})

//text based search books
app.get(PATHS.search, AuthenticateUsers, async(req, res)=>{
  const perpage = 50;
  const {pagenum, searchQuery} = req.query
  try{
    const results = await db.BookModel.find({$text: {$search: searchQuery as string}}).skip(perpage * (pagenum as unknown as number)).limit(perpage)
    res.status(httpStatus.OK).send(JSON.stringify(results))
    return;
  }
  catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err)
    return;
  }
})

// add a book to cart
app.post(PATHS.addToCart, AuthenticateUsers, async (req: Request<{},{}, IAddToCartReq>, res)=>{
  const user: Document<unknown, any, IUser> & IUser = res.locals.user;
  try {
    user.cart?.push(req.body.bookId);
    await user.save();
    res.status(httpStatus.OK).send(JSON.stringify(user.cart));
    return;
  }
  catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Something went wrong')
    return;
  }
})

// clear cart
app.delete(PATHS.clearCart, AuthenticateUsers, async(req, res)=>{
  const user: Document<unknown, any, IUser> & IUser = res.locals.user;
  try{
    user.cart = [];
    await user.save();
    res.status(httpStatus.OK).send(JSON.stringify(user.cart));
    return;
  }
  catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
    return;
  }
})

//checkout
app.post(PATHS.checkout, AuthenticateUsers, async(req: Request<{}, {}, ICheckoutReq>, res)=>{
  const user: Document<unknown, any, IUser> & IUser = res.locals.user;
  if(!user.cart){
    res.send('cart empty')
    return;
  }
  if(!req.body.shippingAddress){
    res.send("no shipping address chosen");
    return;
  }
  try{
    const books = await db.BookModel.find({_id: {$in: user.cart}})
    console.log(books)
    var totalCost = 0;
    books.forEach(book => totalCost+=book.price)

    const order = new db.OrderModel({
      books: user.cart,
      user: user.id,
      shippingAddress: req.body.shippingAddress,
    })
    await order.save();
    res.status(httpStatus.OK).send(JSON.stringify({books, totalCost, order}))
    return;
  }
  catch(err) {
    console.log(err)
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
    return;
  }
})

app.get(PATHS.user, AuthenticateUsers, (req, res)=>{
  try{
    const user: Document<unknown, any, IUser> & IUser = res.locals.user;
    const userOrders = db.OrderModel.find({user: user.id})
    res.status(httpStatus.OK).send(JSON.stringify({
      name: user.name,
      email: user.email,
      shippingAddresses: user.shippingAddresses,
      accessLevel: user.accessLevel,
      datJoined: user.dateJoined,
      orders: userOrders,
    }))
    return;
  }
  catch (err){
    console.log(err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
    return;
  }
});

app.post(PATHS.user, AuthenticateUsers, async (req: Request<{}, {}, IUserChangesReq>, res)=>{
  if(!req.body.name || req.body.shippingAddresses == undefined){
    res.send('name and email cannot be empty and shipping addresses cannot be undefined')
    return
  }
  try{
    const user : Document<unknown, any, IUser> & IUser = res.locals.user;
    user.name = req.body.name,
    user.shippingAddresses = req.body.shippingAddresses;
    await user.save()
  }
  catch (err) {
    console.log(err)
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
  }
})

app.post(PATHS.addShippingAddress, AuthenticateUsers, async (req: Request<{}, {}, IAddShippingAddressReq>, res)=>{
  const user: Document & IUser = res.locals.user;
  try{
    user.shippingAddresses?.push(req.body.shippingAddress);
    await user.save();
    res.status(200).send(JSON.stringify(user.shippingAddresses));
  }
  catch(err) {
    console.log(err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
  }
})

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
})
