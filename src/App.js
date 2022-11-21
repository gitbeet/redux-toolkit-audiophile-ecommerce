import { Routes, Route, Redi } from "react-router-dom";
import ProductDataProvider from "./context/ProductDataContext";
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
import { useStoreShoppingCart } from "./features/shoppingCart/useStoreShoppingCart";
import { useOnSnapshot } from "./features/shoppingCart/useOnSnapshot";
import "./css/App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "./features/products/productsSlice";
function App() {
  useStoreShoppingCart();
  useUserAuthStatus();
  useOnSnapshot();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  useEffect(() => {
    console.log(products);
  }, [products]);
  return (
    <PopUpProvider>
      <ProductDataProvider>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/checkout" element={<CheckoutForm />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/:categoryName" element={<CategoryPage />} />
            <Route path="/:categoryName/:productId" element={<ProductPage />} />
            <Route path="/404" element={<PageNotFound />} />
            {/* <Route path="/*" element={<PageNotFound />} /> */}
          </Route>
        </Routes>
      </ProductDataProvider>
    </PopUpProvider>
  );
}

export default App;
