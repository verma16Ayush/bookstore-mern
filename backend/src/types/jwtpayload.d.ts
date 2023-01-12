export type IJWTPayload = {
  name: string;
  id: string;
  accessLevel: string;
  shippingAddresses: string[];
  cart: string[];
  iat: number;
};