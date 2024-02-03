import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/users/userSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
