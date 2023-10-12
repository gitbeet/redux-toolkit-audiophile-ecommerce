import { useNavigate, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import CategoryList from "./CategoryList";
import { useAppSelector } from "../hooks/reduxHooks";
import { MoonLoader } from "react-spinners";
import { useScrollToTop } from "../hooks/useScrollToTop";
import "../css/CategoryPage.css";

export default function CategoryPage() {
  const navigate = useNavigate();
  const { categoryName } = useParams();
  const { productData, isLoading } = useAppSelector((state) => state.products);

  const categoryItems = productData
    .filter((product) => product.category === categoryName)
    .map((product) => ({
      id: product.id,
      new: product.new,
      name: product.name,
      description: product.description,
      categoryImage: product.categoryImage,
    }));

  useScrollToTop(categoryItems);

  if (isLoading)
    return (
      <div className="container not-found">
        <MoonLoader />
      </div>
    );
  if (!isLoading && !categoryItems.length) {
    navigate("/404");
  }

  return (
    <div className="category-page">
      <div className="category-page-header">
        <h1>{categoryName}</h1>
      </div>
      <div className="product-card-list">
        {categoryItems
          .sort((a, b) => {
            return a.new && !b.new ? -1 : !a.new && b.new ? 1 : 0;
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
