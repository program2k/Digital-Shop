import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productsService } from "./productsService";

export const getAllProducts = createAsyncThunk(
  "product/getAll",
  async (thunkAPI) => {
    try {
      return await productsService.getProducts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.productsService);
    }
  }
);

export const getOnlyProduct = createAsyncThunk(
  "product/getOnly",
  async (id, thunkAPI) => {
    try {
      return await productsService.getOnlyProduct(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.productsService);
    }
  }
);

export const addFavourite = createAsyncThunk(
  "product/favourite",
  async (productId, thunkAPI) => {
    try {
      return await productsService.addFavourite(productId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.productsService);
    }
  }
);

export const getSeachProduct = createAsyncThunk(
  "product/search",
  async (data, thunkAPI) => {
    try {
      return await productsService.searchProduct(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.productsService);
    }
  }
);

const productState = {
  product: "",
  onlyProduct: [],
  addFavourite: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const productsSlice = createSlice({
  name: "product",
  initialState: productState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.product = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })

      .addCase(getOnlyProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOnlyProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.onlyProduct = action.payload;
      })
      .addCase(getOnlyProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })

      .addCase(addFavourite.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addFavourite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.addFavourite = action.payload;
        state.message = "Success";
      })
      .addCase(addFavourite.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })

      .addCase(getSeachProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSeachProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.searchList = action.payload;
        state.message = "Success";
      })
      .addCase(getSeachProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default productsSlice.reducer;
