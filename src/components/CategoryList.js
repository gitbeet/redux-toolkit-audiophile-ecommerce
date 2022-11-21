import React from "react";
import CategoryItem from "./CategoryItem";
import { useSelector } from "react-redux";
import "../css/CategoryList.css";

export default function CategoryList({ mobileMenu = false }) {
  const { productData } = useSelector((state) => state.products);

  return (
    <div className="category-list">
      {[...new Set(productData.map((product) => product.category))].map(
        (category) => {
          return (
            <CategoryItem
              key={category}
              category={category}
              mobileMenu={mobileMenu}
            />
          );
        }
      )}
    </div>
  );
}
