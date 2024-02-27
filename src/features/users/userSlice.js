import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./userService";
import { toast } from "react-toastify";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      return await authService.registerUser(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.authService);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      return await authService.loginUser(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.authService);
    }
  }
);

export const getFavouriteList = createAsyncThunk(
  "user/favourite",
  async (thunkAPI) => {
    try {
      return await authService.favouriteList();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.authService);
    }
  }
);

export const removeFavourite = createAsyncThunk(
  "favourite/remove",
  async (productId, thunkAPI) => {
    try {
      return await authService.removeFavourite(productId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.authService);
    }
  }
);

export const addToCart = createAsyncThunk(
  "user/cart/add",
  async (cartData, thunkAPI) => {
    try {
      return await authService.addToCart(cartData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.authService);
    }
  }
);

export const getCart = createAsyncThunk("user/cart/get", async (thunkAPI) => {
  try {
    return await authService.getCart();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.authService);
  }
});

export const updateCart = createAsyncThunk(
  "user/cart/update",
  async ({ productId, quantity }) => {
    try {
      return await updateCart(productId, quantity);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const removeCart = createAsyncThunk(
  "user/cart/remove",
  async (productId, thunkAPI) => {
    try {
      return await authService.removeCart(productId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.authService);
    }
  }
);

const initialState = {
  user: "",
  favouriteProducts: [],
  cartItem: [],
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
        state.createUser = action.payload;
        if (state.isSuccess === true) {
          toast.info("User Created Successfully");
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError === true) {
          toast.error(action.error);
        }
      })

      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
        if (state.isSuccess === true) {
          // Token
          toast.info("Đăng nhập thành công");
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        if (state.isError === true) {
          toast.error(action.error);
        }
      })

      .addCase(getFavouriteList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFavouriteList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.favouriteProducts = action.payload;
      })
      .addCase(getFavouriteList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })

      .addCase(removeFavourite.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeFavourite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.addFavourite = action.payload;
        state.message = "Success";
      })
      .addCase(removeFavourite.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })

      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.cartItem = action.payload;
        state.message = "Success";
        if ((state.isSuccess = true)) {
          toast.info("Thêm vào giỏ hàng thành công");
        }
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })

      .addCase(getCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.cartItem = action.payload;
        state.message = "Success";
      })
      .addCase(getCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })

      .addCase(updateCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.cartItem = action.payload;
        state.message = "Success";
      })
      .addCase(updateCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })

      .addCase(removeCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.cartItem = action.payload;
        if ((state.isSuccess = true)) {
          toast.info("Xoá khỏi giỏ hàng thành công");
        }
        state.message = "Success";
      })
      .addCase(removeCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default authSlice.reducer;
