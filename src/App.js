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
import { setShoppingCart } from "./features/shoppingCart/shoppingCartSlice";
import { doc, onSnapshot } from "firebase/firestore";
import db from "./config/firebase";
import { useStoreShoppingCart } from "./features/shoppingCart/useStoreShoppingCart";
function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  useStoreShoppingCart();

  useUserAuthStatus();
  useEffect(() => {
    if (!user) return;
    const userUid = user.uid;
    const cartItemsRef = doc(db, "shoppingCart", userUid);
    onSnapshot(cartItemsRef, (snapshot) => {
      const shoppingCartProducts = Object.entries(snapshot.data()).map(
        (entry) => ({
          id: entry[0],
          ...entry[1],
        })
      );
      dispatch(setShoppingCart(shoppingCartProducts));
      console.log(
        Object.entries(snapshot.data()).map((entry) => ({
          id: entry[0],
          ...entry[1],
        }))
      );
    });
  }, [user, dispatch]);
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
