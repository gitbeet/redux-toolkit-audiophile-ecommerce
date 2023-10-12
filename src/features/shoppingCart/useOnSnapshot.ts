import { doc, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import db from "../../config/firebase";
import { setShoppingCart } from "./shoppingCartSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";

interface SnapshotInterface {
  [key: number]: { quantity: number };
}

export const useOnSnapshot = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  useEffect(() => {
    if (!user) return;
    const userUid = user.uid;
    const cartItemsRef = doc(db, "shoppingCart", userUid);
    onSnapshot(cartItemsRef, (snapshot) => {
      const shoppingCartProducts = Object.entries(
        snapshot.data() as SnapshotInterface
      ).map((entry) => ({
        id: parseInt(entry[0]),
        ...entry[1],
      }));
      console.log(shoppingCartProducts);
      dispatch(setShoppingCart(shoppingCartProducts));
    });
  }, [user, dispatch]);
};
