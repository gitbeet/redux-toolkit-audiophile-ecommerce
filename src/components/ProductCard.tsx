import React from "react";
import { Link } from "react-router-dom";
import "../css/ProductCard.css";
import {
  GalleryInterface,
  GalleryValuesInterface,
} from "../features/products/productsSlice";

interface ProductCardInterface {
  id: number;
  name: string;
  description: string;
  new: boolean;
  categoryImage: GalleryValuesInterface;
}

interface Props {
  product: ProductCardInterface;
  arrangement: "imageLeft" | "imageRight";
}

export default function ProductCard({ product, arrangement }: Props) {
  const { mobile, tablet, desktop } = product.categoryImage;

  return (
    <div
      className={`${
        arrangement === "imageLeft"
          ? "product-card product-card-row"
          : "product-card product-card-row-reverse"
      }`}
    >
      <div className="product-card-image-container">
        <img
          className="product-card-image image-mobile"
          src={mobile}
          alt="product"
        />
        <img
          className="product-card-image image-tablet"
          src={tablet}
          alt="product"
        />
        <img
          className="product-card-image image-desktop"
          src={desktop}
          alt="product"
        />
      </div>
      <div className="product-card-text">
        {product.new && <h6 className="overline color-accent">new product</h6>}
        <h2 className="product-card-name">{product.name}</h2>
        <p className="product-card-description">{product.description}</p>
        <Link to={`${product.id}`}>
          <button className="btn-accent">see product</button>
        </Link>
      </div>
    </div>
  );
}
