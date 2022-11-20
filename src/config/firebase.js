import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3S6JsLxqrgysZDCDT2mHWXu_rCfakRcc",
  authDomain: "audiophile-ecommerce-ab33f.firebaseapp.com",
  projectId: "audiophile-ecommerce-ab33f",
  storageBucket: "audiophile-ecommerce-ab33f.appspot.com",
  messagingSenderId: "736806340587",
  appId: "1:736806340587:web:d36f9f07605ab0c4ebfbae",
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export default db;
