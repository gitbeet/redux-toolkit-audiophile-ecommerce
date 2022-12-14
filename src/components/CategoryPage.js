import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import CategoryList from "./CategoryList";
import "../css/CategoryPage.css";
import { useSelector } from "react-redux";

export default function CategoryPage() {
  const navigate = useNavigate();
  const { categoryName } = useParams();
  const { productData } = useSelector((state) => state.products);

  const categoryItems = productData.filter(
    (product) => product.category === categoryName
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryItems]);

  if (!productData) return <h1>Loading ...</h1>;
  if (categoryItems.length === 0) {
    navigate("/404");
  }
  return (
    <div className="category-page">
      <div className="category-page-header">
        <h1>{categoryName}</h1>
      </div>
      <div className="product-card-list">
        {categoryItems
          .sort(function (a, b) {
            return a.new < b.new;
          })
          .map((product, index) => {
            return (
              <ProductCard
                key={product.id}
                product={product}
                arrangement={index % 2 === 0 ? "imageLeft" : "imageRight"}
              />
            );
          })}
      </div>
      <div className="container">
        <CategoryList />
      </div>
    </div>
  );
}
