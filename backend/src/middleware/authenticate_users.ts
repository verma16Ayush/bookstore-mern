import express, {Application, Request, Response, NextFunction} from "express";
import httpStatus from "http-status";
import * as jwt from 'jsonwebtoken';
import { JWT_SECRET } from "../const";
import { db } from "../models";
import { IUser } from "../models/user";
import { IJWTPayload } from "../types/jwtpayload";


// makes sure the req has nname and email and the email is not already
// in use
export const VerifyUserEligible = (req: Request, res: Response, next: NextFunction) =>{
  console.log('hello')
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  if(name == null || email == null || password == null){
    res.status(401).send({
      message: 'name and email and password cannot be empty'
    });
  }
  else{
    db.UserModel.findOne({
      email: email
    }).exec((err, user)=>{
      if(err){
        res.status(500).send(err);
        return;
      }
      if(user){
        res.status(400).send({
          message: "Failed to signup! email already in use"
        })
      }
    })
  }
  next();
}

export const AuthenticateUsers = async (req: Request, res: Response, next: NextFunction) => {
  // Bearer TOKEN
  let user = {};
  const token = req.headers.authorization?.split(' ')[1]
  console.log(token);
  db.BlacklistedTokensModel.findOne({
    token: token
  }).exec((err, token)=>{
    if(err){
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send('something terrible happened');
      return;
    }
    if(token) {
      res.status(httpStatus.UNAUTHORIZED).send("session expired! please log in again. The bearer token used to make this requested was blacklisted");
      return;
    }
  })
  if(token){
    jwt.verify(token, JWT_SECRET, async (err, userJWTPayload)=>{
      const userDecoded : IJWTPayload = userJWTPayload as IJWTPayload;
      // console.log(user)
      if(err)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Failed to Authenticate user. please logout and login again');
      
      const user = await db.UserModel.findById(userDecoded.id)
      res.locals.user = user
      return next();
    })
  }
}