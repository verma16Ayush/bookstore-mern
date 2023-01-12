import { model, Schema, Types } from "mongoose";

export type IUser = {
  name: string;
  email: string;
  password: string;
  accessLevel: 'user' | 'admin';
  dateJoined: number;
  shippingAddresses?: string[];
  cart?: Types.ObjectId[];
}

const UserSchema = new Schema<IUser>({
  name: {type: String, required: true},
  email: {type: String, required: true, index: {unique: true}},
  password: {type: String, required: true},
  accessLevel: {type: String, required: true},
  dateJoined: {type: Number, required: true},
  shippingAddresses: {type: [String], required: false},
  cart: {type: [Schema.Types.ObjectId], ref: 'BookModel'}
})

export const UserModel = model<IUser>('UserModel', UserSchema);