import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './slices/cartSlice.js'
import resturantSlice from './slices/restuarantSlice.js'

export const store = configureStore({
  reducer: {
    cart:cartSlice,
    resturant:resturantSlice
  },
});
