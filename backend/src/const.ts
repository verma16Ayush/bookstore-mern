import * as dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || ''
export const DB_URI = process.env.DB_URI || ''
export const JWT_SECRET = process.env.JWT_SECRET || ''

export const PATHS = {
  signup: '/user/signup',
  login: '/user/login',
  logout: '/user/logout',
  books: '/books/',
  search: '/search/general',
  advancedSearch: '/search/advanced',
  addToCart: '/addtocart',
  clearCart: '/clearcart',
  checkout: '/checkout',
  user: '/user',
  addShippingAddress: '/addshippingaddress'
}