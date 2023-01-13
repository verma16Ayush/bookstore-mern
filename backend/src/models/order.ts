import {model, Schema, Types} from "mongoose";

export type IOrder = {
  books?: Types.ObjectId[];
  user : Types.ObjectId; 
  shippingAddress: string;
}

const OrderSchema = new Schema<IOrder>({
  books: {type: [Schema.Types.ObjectId], ref: 'BookModel'},
  user: {type: Schema.Types.ObjectId, ref: 'UserModel'}
})

export const OrderModel = model<IOrder>('OrderModel', OrderSchema);


