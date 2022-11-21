import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShoppingCart } from "./shoppingCartSlice";
export const useStoreShoppingCart = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { shoppingCart } = useSelector((state) => state.shoppingCart);
  useEffect(() => {
    if (user) return;

    const localstorageItem = localStorage.getItem("audiophileShoppingCart");
    if (localstorageItem !== null)
      dispatch(setShoppingCart(JSON.parse(localstorageItem)));
  }, [dispatch, user]);

  useEffect(() => {
    if (user) return;

    localStorage.setItem(
      "audiophileShoppingCart",
      JSON.stringify(shoppingCart)
    );
  }, [shoppingCart, user]);
};
