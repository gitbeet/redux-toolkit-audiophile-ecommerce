import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/auth/userSlice";
import shoppingCartReducer from "./features/shoppingCart/shoppingCartSlice";
import productsReducer from "./features/products/productsSlice";
import modalsReduces from "./features/modals/modalsSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    shoppingCart: shoppingCartReducer,
    products: productsReducer,
    modals: modalsReduces,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
