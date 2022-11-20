import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/auth/userSlice";
import shoppingCartReducer from "./features/shoppingCart/shoppingCartSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    shoppingCart: shoppingCartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
