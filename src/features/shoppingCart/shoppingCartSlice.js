import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDoc, doc, setDoc, updateDoc } from "firebase/firestore";
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
      const cartItemsRef = doc(db, "shoppingCart", userUid);
      return await getDoc(cartItemsRef);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addToCart = createAsyncThunk(
  "shoppingCart/addToCart",
  async (productData, thunkAPI) => {
    try {
      const { id, quantity } = productData;
      const userUid = auth.currentUser.uid;
      const index = thunkAPI.getState().shoppingCart.shoppingCart.length;
      console.log(index);

      return await updateDoc(doc(db, "shoppingCart", userUid), {
        [id]: { quantity, index },
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const removeAll = createAsyncThunk(
  "shoppingCart/removeAll",
  async (_, thunkAPI) => {
    try {
      const userUid = auth.currentUser.uid;
      const index = thunkAPI.getState().shoppingCart.shoppingCart.length;
      console.log(index);

      return await setDoc(doc(db, "shoppingCart", userUid), {});
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    setShoppingCart: (state, action) => {
      state.shoppingCart = action.payload;
      console.log(state.shoppingCart);
    },
  },
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
      })
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        console.log(action.payload);
      });
  },
});
export const { setShoppingCart } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
