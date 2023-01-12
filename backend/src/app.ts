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

dotenv.config()

const app = express();
app.use(express.json());
app.use(express.urlencoded());

db.mongoose.connect(DB_URI).then(()=>{
  console.log(`DB connected at ${DB_URI}`)
}).catch((e)=>{
  console.log(e)
  process.exit();
})

app.post(PATHS.signup, VerifyUserEligible, async (req: Request, res: Response)=>{
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


app.post(PATHS.login, (req, res)=>{
  const userEmail = req.body.email
  db.UserModel.findOne({
    email: userEmail
  }).exec((err, user)=>{
    if(err){
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
      return
    }
    if(!user){
      res.status(httpStatus.NOT_FOUND).send("Failed!! user not found with given email")
      return;
    }

    if(bcrypt.compareSync(req.body.password, user.password)){
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
    else{
      res.status(httpStatus.UNAUTHORIZED).send("Failed!! incorrect username or password")
    }
  })
})

app.delete(PATHS.logout, (req, res)=>{
  const token = req.headers.authorization?.split(' ')[1]
  if(token){
    const t = new BlacklistedTokensModel({
      token: token
    })
    t.save();
    res.status(200).send('Logged out successfully').redirect('/');
  }
})

app.get('/testroute', AuthenticateUsers, (req, res)=>{
  const user: IUser = res.locals.user;
  console.log(res.locals.user)
  res.status(httpStatus.OK).send(JSON.stringify(user))
  return;
})

app.listen(PORT, ()=>{
    console.log(`app listening on port ${PORT}`);
})
