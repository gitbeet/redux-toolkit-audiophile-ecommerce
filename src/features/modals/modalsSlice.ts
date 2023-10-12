import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showMobileMenu: false,
  showCheckoutWindow: false,
  showSuccessfulOrderWindow: false,
};

const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setShowMobileMenu: (state, { payload }) => {
      state.showMobileMenu = payload;
    },
    toggleMobileMenu: (state) => {
      state.showMobileMenu = !state.showMobileMenu;
    },
    setShowCheckoutWindow: (state, { payload }) => {
      state.showCheckoutWindow = payload;
    },
    toggleCheckoutWindow: (state) => {
      state.showCheckoutWindow = !state.showCheckoutWindow;
    },
    setShowSuccessfulOrderWindow: (state, { payload }) => {
      state.showSuccessfulOrderWindow = payload;
    },
    toggleShowSuccessfulOrderWindow: (state) => {
      state.showSuccessfulOrderWindow = !state.showSuccessfulOrderWindow;
    },
  },
});

export default modalsSlice.reducer;
export const {
  setShowCheckoutWindow,
  setShowMobileMenu,
  setShowSuccessfulOrderWindow,
  toggleCheckoutWindow,
  toggleMobileMenu,
  toggleShowSuccessfulOrderWindow,
} = modalsSlice.actions;
