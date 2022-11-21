import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import db from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const getAllProducts = createAsyncThunk(
  "products/getAll",
  async (_, thunkAPI) => {
    try {
      const collectionRef = collection(db, "productData");
      return await getDocs(collectionRef);
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
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
        state.products = action.payload.data();
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      });
  },
});

export default productsSlice.reducer;
