import "../css/ProductImageGalleryItem.css";
import { GalleryValuesInterface } from "../features/products/productsSlice";

interface Props {
  images: GalleryValuesInterface;
  area: "topLeft" | "bottomLeft" | "right";
}

export default function ProductImageGalleryItem({ images, area }: Props) {
  return (
    <>
      <img
        style={{ gridArea: area }}
        className="image-mobile image-border"
        src={images.mobile}
        alt="gallery"
      />
      <img
        style={{ gridArea: area }}
        className="image-tablet image-border"
        src={images.tablet}
        alt="gallery"
      />
      <img
        style={{ gridArea: area }}
        className="image-desktop image-border"
        src={images.desktop}
        alt="gallery"
      />
    </>
  );
}
