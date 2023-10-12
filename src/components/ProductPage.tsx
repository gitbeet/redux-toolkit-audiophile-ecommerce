import { useParams, useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHooks";
import { formatCurrency } from "../utilities/formatCurrency";
import { MoonLoader } from "react-spinners";
import PageNotFound from "./PageNotFound";
import InTheBoxList from "./InTheBoxList";
import ProductImageGallery from "./ProductImageGallery";
import ReccomendedList from "./ReccomendedList";
import CategoryList from "./CategoryList";
import AddToCart from "./AddToCart";
import TextButton from "./TextButton";
import { useScrollToTop } from "../hooks/useScrollToTop";
import "../css/ProductPage.css";

export default function ProductPage() {
  const navigate = useNavigate();

  const { productId } = useParams();
  const { productData, isLoading } = useAppSelector((state) => state.products);

  useScrollToTop(productId);

  const product =
    productData.find((product) => product.id.toString() === productId) || "";

  if (isLoading || !product)
    return (
      <div className="container not-found">
        <MoonLoader />
      </div>
    );

  if (!isLoading && !product) return <PageNotFound />;
  return (
    <>
      <div className="container product-page-container">
        <div className="product-page-go-back-button">
          <TextButton clickFunction={() => navigate(-1)} />
        </div>
        <section className="product-page-top-section">
          <div className="product-page-image-section">
            <img
              className="image-border image-mobile"
              src={product.image.mobile}
              alt="product"
            />
            <img
              className="image-border image-tablet"
              src={product.image.tablet}
              alt="product"
            />
            <img
              className="image-border image-desktop"
              src={product.image.desktop}
              alt="product"
            />
          </div>
          <div className="product-page-top-section-text">
            {product.new && (
              <h6 className="overline color-accent product-page-new-product">
                new product
              </h6>
            )}
            <h2 className="product-page-name">{product.name}</h2>
            <p className="color-gray">{product.description}</p>
            <h6 className="product-page-price">
              {formatCurrency(product.price)}
            </h6>
            <AddToCart productId={product.id} />
          </div>
        </section>
        <div className="desktop-features-inthebox">
          <section>
            <h3>features</h3>
            <p className="color-gray product-page-features">
              {product.features}
            </p>
          </section>
          <section className="product-page-in-the-box-section">
            <h3>in the box</h3>
            <InTheBoxList includes={product.includes} />
          </section>
        </div>
        <ProductImageGallery gallery={product.gallery} />
        <ReccomendedList
          category={product.category}
          reccomendedProducts={product.others}
        />
        <CategoryList />
      </div>
    </>
  );
}
