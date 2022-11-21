import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDoc, doc, setDoc, updateDoc } from "firebase/firestore";
import db from "../../config/firebase";
import { auth } from "../../config/firebase";

const initialState = {
  shoppingCart: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const addToCart = createAsyncThunk(
  "shoppingCart/addToCart",
  async (productData, thunkAPI) => {
    try {
      const { id, quantity } = productData;
      const userUid = auth.currentUser.uid;
      const index = thunkAPI.getState().shoppingCart.shoppingCart.length;

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
    },
    addToCartLocalStorage: (state, action) => {
      if (action.payload.quantity === 0) return;
      if (state.shoppingCart.length === 0) {
        state.shoppingCart = [
          { id: action.payload.id, quantity: action.payload.quantity },
        ];
        return;
      }
      if (
        state.shoppingCart.findIndex(
          (product) => product.id === action.payload.id
        ) === -1
      ) {
        state.shoppingCart.push({
          id: action.payload.id,
          quantity: action.payload.quantity,
        });
        return;
      }
      state.shoppingCart = state.shoppingCart.map((product) => {
        return product.id === action.payload.id
          ? { ...product, quantity: action.payload.quantity }
          : { ...product };
      });
    },
    changeQuantityLocalStorage: (state, action) => {
      state.shoppingCart = state.shoppingCart.map((product) => {
        return product.id === action.payload.id
          ? { ...product, quantity: action.payload.quantity }
          : product;
      });
    },
    removeAllLocalStorage: (state) => {
      state.shoppingCart = [];
    },
  },
  extraReducers: (builder) => {
    builder
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
      });
  },
});
export const {
  setShoppingCart,
  addToCartLocalStorage,
  removeAllLocalStorage,
  changeQuantityLocalStorage,
} = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
