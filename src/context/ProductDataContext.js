import React, { createContext, useContext, useState } from "react";
import data from "../data.json";

const productDataContext = createContext();

export const useProductData = () => {
  const context = useContext(productDataContext);
  if (!context) throw new Error("No product data context found!");
  return context;
};

export default function ProductDataProvider({ children }) {
  const [productData, setProductData] = useState(data);

  return (
    <productDataContext.Provider value={{ productData }}>
      {children}
    </productDataContext.Provider>
  );
}
