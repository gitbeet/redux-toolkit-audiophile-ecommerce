import CategoryItem from "./CategoryItem";
import "../css/CategoryList.css";

const categories = ["headphones", "speakers", "earphones"];

export default function CategoryList({ mobileMenu = false }) {
  return (
    <div className="category-list">
      {categories.map((category) => (
        <CategoryItem
          key={category}
          category={category}
          mobileMenu={mobileMenu}
        />
      ))}
    </div>
  );
}
