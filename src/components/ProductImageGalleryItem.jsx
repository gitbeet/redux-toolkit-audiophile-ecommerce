import "../css/ProductImageGalleryItem.css";

export default function ProductImageGalleryItem({ images, area }) {
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
