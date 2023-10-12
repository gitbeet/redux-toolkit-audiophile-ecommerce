import React from "react";
import ReccomendedProduct from "./ReccomendedProduct";
import "../css/ReccomendedList.css";

export default function ReccomendedList({ reccomendedProducts, category }) {
  return (
    <div className="reccomended-list text-center">
      <h3>you may also like</h3>
      <div className="reccomended-list-container">
        {reccomendedProducts.map((reccomendedProduct, index) => {
          return (
            <ReccomendedProduct
              key={index}
              reccomendedProduct={reccomendedProduct}
              category={category}
            />
          );
        })}
      </div>
    </div>
  );
}
