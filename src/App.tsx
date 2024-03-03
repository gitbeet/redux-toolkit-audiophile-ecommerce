import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/NotFound";
import SharedLayout from "./Layouts/MainLayout";
import Category from "./Pages/Category";
import Product from "./Pages/Product";
import Checkout from "./Pages/Checkout";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { useUserAuthStatus } from "./features/auth/useUserAuthStatus";
import { useStoreShoppingCart } from "./features/shoppingCart/useStoreShoppingCart";
import { useOnSnapshot } from "./features/shoppingCart/useOnSnapshot";
import { useAppDispatch } from "./hooks/reduxHooks";
import { useEffect } from "react";
import { getAllProducts } from "./features/products/productsSlice";
import "./css/App.css";

function App() {
  useStoreShoppingCart();
  useUserAuthStatus();
  useOnSnapshot();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <Routes>
      <Route
        path="/"
        element={<SharedLayout />}
      >
        <Route
          index
          element={<Home />}
        />
        <Route
          path="/checkout"
          element={<Checkout />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/:categoryName"
          element={<Category />}
        />
        <Route
          path="/:categoryName/:productId"
          element={<Product />}
        />
        <Route
          path="/404"
          element={<PageNotFound />}
        />
      </Route>
    </Routes>
  );
}

export default App;
