import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: "#706C61",
    },
    secondary:{
      main: "#E1F4F3",
    },
    common: {
      white: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: '"Playfair Display", serif, "Quicksand", sans-serif',
    button: {
      textTransform: 'none'
    }
  }
});

export const BASE_API = 'http://localhost:3000/'
export const API_PATHS = {
  signup: 'user/signup/',
  login: 'user/login/',
  logout: 'user/logout/',
  testroute: 'testroute/',
  books: 'books/',
  search: 'search/general/',
  addToCart: 'addtocart/',
  clearCart: 'clearcart/',
  checkout: 'checkout/',
  user: 'user/',
  addShippingAddress: 'addshippingaddress/'
}

export const APP_PATHS = {
  home: '/',
  login: '/login',
  signup: '/signup'
}

export const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
}