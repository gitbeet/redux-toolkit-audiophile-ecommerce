import { Link } from "react-router-dom";
import ButtonArrow from "./ButtonArrow";
import "../css/CategoryItem.css";

const imagesMap = {
  "headphones":
    "https://firebasestorage.googleapis.com/v0/b/audiophile-ecommerce-ab33f.appspot.com/o/shared%2Fdesktop%2Fimage-category-thumbnail-headphones.png?alt=media&token=2fe5c873-5fe4-49e9-b9d7-9f499a296b2a&_gl=1*14a0geo*_ga*MjA5NDQ3NzQxOC4xNjk3MDkzODA3*_ga_CW55HF8NVT*MTY5NzEwMzM0NS4yLjEuMTY5NzEwNjczMy44LjAuMA..",
  "earphones":
    "https://firebasestorage.googleapis.com/v0/b/audiophile-ecommerce-ab33f.appspot.com/o/shared%2Fdesktop%2Fimage-category-thumbnail-earphones.png?alt=media&token=97a965b7-4dd5-4c1f-be6e-60bf8d9fbb70&_gl=1*1gb0p20*_ga*MjA5NDQ3NzQxOC4xNjk3MDkzODA3*_ga_CW55HF8NVT*MTY5NzEwMzM0NS4yLjEuMTY5NzEwNjc0My42MC4wLjA.",
  "speakers":
    "https://firebasestorage.googleapis.com/v0/b/audiophile-ecommerce-ab33f.appspot.com/o/shared%2Fdesktop%2Fimage-category-thumbnail-speakers.png?alt=media&token=5c616261-880c-4013-a650-e051346135b6&_gl=1*17xaejg*_ga*MjA5NDQ3NzQxOC4xNjk3MDkzODA3*_ga_CW55HF8NVT*MTY5NzEwMzM0NS4yLjEuMTY5NzEwNjc1MC41My4wLjA.",
};

export default function CategoryItem({ category, mobileMenu }) {
  return (
    <div className="category-item">
      <div className="category-item-foreground">
        <img
          className="category-item-image image-border"
          src={imagesMap[category]}
          alt={category}
        />
        <h6 className="category-item-name">{category}</h6>
        <Link to={`/${category}`}>
          <p>
            <ButtonArrow
              text={"shop"}
              mobileMenu={mobileMenu}
            />
          </p>
        </Link>
      </div>
      <div className="category-item-background"></div>
    </div>
  );
}
