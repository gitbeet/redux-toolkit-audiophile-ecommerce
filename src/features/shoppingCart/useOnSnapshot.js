import { doc, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import db from "../../config/firebase";
import { setShoppingCart } from "./shoppingCartSlice";
import { useDispatch, useSelector } from "react-redux";

export const useOnSnapshot = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
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
    });
  }, [user, dispatch]);
};
