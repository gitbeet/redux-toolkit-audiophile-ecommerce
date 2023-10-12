import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../css/ReccomendedProduct.css";

export default function ReccomendedProduct({ reccomendedProduct, category }) {
  const { name, slug, image } = reccomendedProduct;
  const { productData } = useSelector((state) => state.products);
  const id = productData.find((product) => product.slug === slug).id;

  return (
    <div className="reccomended-product">
      <img
        className="image-mobile image-border"
        src={image.mobile}
        alt="product"
      />
      <img
        className="image-tablet image-border"
        src={image.tablet}
        alt="product"
      />
      <img
        className="image-desktop image-border"
        src={image.desktop}
        alt="product"
      />
      <h5>{name}</h5>
      <Link to={`/${category}/${id}`}>
        <button className="btn-accent">see product</button>
      </Link>
    </div>
  );
}
