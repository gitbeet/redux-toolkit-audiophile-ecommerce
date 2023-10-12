import React from "react";
import ProductImageGalleryItem from "./ProductImageGalleryItem";
import "../css/ProductImageGallery.css";

export default function ProductImageGallery({ gallery }) {
  return (
    <div className="gallery-container">
      <div className="gallery-wrapper">
        {Object.entries(gallery).map((images, index) => {
          const placementIndex = images[0];
          return (
            <ProductImageGalleryItem
              area={`${
                placementIndex === "first"
                  ? "topLeft"
                  : placementIndex === "second"
                  ? "bottomLeft"
                  : "right"
              }`}
              key={index}
              images={images[1]}
            />
          );
        })}
      </div>
    </div>
  );
}
