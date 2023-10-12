import ProductImageGalleryItem from "./ProductImageGalleryItem";
import "../css/ProductImageGallery.css";
import { GalleryInterface } from "../features/products/productsSlice";

interface Props {
  gallery: GalleryInterface;
}

export default function ProductImageGallery({ gallery }: Props) {
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
