import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/users/userSlice";
import productsReducer from "../features/products/productsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productsReducer,
  },
});
