import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  shoppingCart: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
};

const shoppingCartSlice = createSlice({
  reducers: {},
  extraReducers: (builder) => {},
});
