import mongoose from "mongoose";
import { UserModel } from "./user";
import { BookModel } from "./book";
import { BlacklistedTokensModel } from "./blacklisted_tokens";

export const db = {
  mongoose,
  UserModel,
  BookModel,
  BlacklistedTokensModel
}

