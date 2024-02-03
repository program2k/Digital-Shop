import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./useService";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (thunkAPI) => {
    try {
      return await authService.register(userData);
    } catch (error) {
      return thunkAPI.rejectedWithValue(error);
    }
  }
);

const initialState = {
  user: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = "action.error";
      });
  },
});

export default authSlice.reducer;
