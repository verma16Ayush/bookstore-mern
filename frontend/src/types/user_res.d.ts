import { IOrder } from "./orders";

export type IUserRes = {
  name: string;
  email: string;
  id: string;
  accessLevel: string;
  dateJoined: number;
  shippingAddresses: string[];
  cart: string[];
  userOrders: IOrder[];
}