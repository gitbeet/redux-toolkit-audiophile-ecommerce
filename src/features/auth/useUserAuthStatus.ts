import { useEffect } from "react";
import { auth } from "../../config/firebase";
import { setUser } from "./userSlice";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { onAuthStateChanged } from "firebase/auth";

export const useUserAuthStatus = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(setUser(currentUser));
      } else {
        dispatch(setUser(null));
      }
    });
    return () => unsubscribe();
  }, [dispatch]);
};
