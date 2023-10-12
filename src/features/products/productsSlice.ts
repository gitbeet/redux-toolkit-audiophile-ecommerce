import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import db from "../../config/firebase";

export interface IncludesInterface {
  item: string;
  quantity: number;
}

export interface GalleryValuesInterface {
  "desktop": string;
  "mobile": string;
  "tablet": string;
}

export interface GalleryInterface {
  "first": GalleryValuesInterface;
  "second": GalleryValuesInterface;
  "third": GalleryValuesInterface;
}

export interface OtherInterface {
  image: GalleryValuesInterface;
  name: string;
  slug: string;
}

export interface ProductDataInterface {
  id: number;
  name: string;
  price: number;
  slug: string;
  image: GalleryValuesInterface;
  cartImage: string;
  category: string;
  categoryImage: GalleryValuesInterface;
  description: string;
  features: string;
  gallery: GalleryInterface;
  includes: IncludesInterface[];
  others: OtherInterface[];
  new: boolean;
}

interface StateInterface {
  productData: ProductDataInterface[];
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  message: string;
}

const initialState: StateInterface = {
  productData: [],
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
  reducers: {
    setProducts: (state, action) => {
      state.productData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "";
        const productData: ProductDataInterface[] = [];
        if (!payload) return;
        payload.forEach((doc) =>
          productData.push(doc.data() as ProductDataInterface)
        );
        state.productData = productData;
      })
      .addCase(getAllProducts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = payload as string;
        state.productData = [];
      });
  },
});
export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
