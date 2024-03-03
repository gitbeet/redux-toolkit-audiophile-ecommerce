import CategoryList from "../components/CategoryList";
import HomeHeader from "../components/HomeHeader";
import ProductAdZX7 from "../components/ProductAdZX7";
import ProductAdZX9 from "../components/ProductAdZX9";
import ProductAdYX1 from "../components/ProductAdYX1";
import "../css/Home.css";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="container home-container">
        <div className="home-category-list">
          <CategoryList />
        </div>
        <ProductAdZX9 />
        <ProductAdZX7 />
        <ProductAdYX1 />
      </div>
    </>
  );
}
