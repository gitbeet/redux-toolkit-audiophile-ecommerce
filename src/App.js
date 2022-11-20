import { Routes, Route } from "react-router-dom";
import ProductDataProvider from "./context/ProductDataContext";
import ShoppingCartProvider from "./context/ShoppingCartContext";
import PopUpProvider from "./context/PopUpContext";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import SharedLayout from "./components/SharedLayout";
import CategoryPage from "./components/CategoryPage";
import ProductPage from "./components/ProductPage";
import CheckoutForm from "./components/CheckoutForm";
import Register from "./components/Register";
import Login from "./components/Login";
import { useUserAuthStatus } from "./features/auth/useUserAuthStatus";
import { useDispatch, useSelector } from "react-redux";
import "./css/App.css";
import { useEffect } from "react";
import { getShoppingCart } from "./features/shoppingCart/shoppingCartSlice";
function App() {
  const { user } = useSelector((state) => state.user);
  const { shoppingCart, isError, message } = useSelector(
    (state) => state.shoppingCart
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) return;
    dispatch(getShoppingCart());
  }, [user, dispatch]);

  useEffect(() => {
    console.log(shoppingCart, isError, message);
  }, [shoppingCart, isError, message]);

  useUserAuthStatus();

  return (
    <ShoppingCartProvider>
      <PopUpProvider>
        <ProductDataProvider>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path="/checkout" element={<CheckoutForm />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/:categoryName" element={<CategoryPage />} />
              <Route
                path="/:categoryName/:productName"
                element={<ProductPage />}
              />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </ProductDataProvider>
      </PopUpProvider>
    </ShoppingCartProvider>
  );
}

export default App;
