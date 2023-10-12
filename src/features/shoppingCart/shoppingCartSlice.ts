import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import db from "../../config/firebase";
import { auth } from "../../config/firebase";

export interface ShoppingCartItemInterface {
  id: number;
  quantity: number;
}

interface StateInterface {
  shoppingCart: ShoppingCartItemInterface[];
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  message: string;
}

const initialState: StateInterface = {
  shoppingCart: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const addToCart = createAsyncThunk(
  "shoppingCart/addToCart",
  async ({ id, quantity }: { id: number; quantity: number }, thunkAPI) => {
    try {
      if (!auth.currentUser?.uid) return;
      const userUid = auth.currentUser.uid;
      // const index = (thunkAPI.getState() as RootState).shoppingCart.shoppingCart
      //   .length;
      return await updateDoc(doc(db, "shoppingCart", userUid), {
        [id]: { quantity },
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
      if (!auth.currentUser?.uid) return;
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
    addToCartLocalStorage: (
      state,
      { payload }: { payload: { id: number; quantity: number } }
    ) => {
      if (payload.quantity === 0) return;
      if (state.shoppingCart.length === 0) {
        state.shoppingCart = [{ id: payload.id, quantity: payload.quantity }];
        return;
      }
      if (
        state.shoppingCart.findIndex((product) => product.id === payload.id) ===
        -1
      ) {
        state.shoppingCart.push({
          id: payload.id,
          quantity: payload.quantity,
        });
        return;
      }
      state.shoppingCart = state.shoppingCart.map((product) => {
        return product.id === payload.id
          ? { ...product, quantity: payload.quantity }
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
      .addCase(addToCart.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
      })
      .addCase(addToCart.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.message = payload as string;
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
