import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDoc, doc } from "firebase/firestore";
import { useSelector } from "react-redux";
import db from "../../config/firebase";
import { auth } from "../../config/firebase";
const initialState = {
  shoppingCart: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

// get products , add product , remove product , change quantity

export const getShoppingCart = createAsyncThunk(
  "shoppingCart/getAll",
  async (_, thunkAPI) => {
    try {
      const userUid = auth.currentUser.uid;
      const cartItemsRef = doc(db, "users", userUid);
      return await getDoc(cartItemsRef);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getShoppingCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getShoppingCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;

        if (action.payload.exists()) {
          state.shoppingCart = action.payload.data();
        } else {
          state.shoppingCart = [];
        }
      })
      .addCase(getShoppingCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default shoppingCartSlice.reducer;
