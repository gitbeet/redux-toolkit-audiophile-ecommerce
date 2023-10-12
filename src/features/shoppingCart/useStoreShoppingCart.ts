import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setShoppingCart } from "./shoppingCartSlice";

export const useStoreShoppingCart = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const { shoppingCart } = useAppSelector((state) => state.shoppingCart);
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
