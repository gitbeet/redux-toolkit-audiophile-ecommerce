import "../css/CompanySummary.css";

const images = {
  mobile:
    "https://firebasestorage.googleapis.com/v0/b/audiophile-ecommerce-ab33f.appspot.com/o/shared%2Fmobile%2Fimage-best-gear.jpg?alt=media&token=45f627b0-d73c-43bc-9c7f-249d42927c11&_gl=1*cpk9d7*_ga*MjA5NDQ3NzQxOC4xNjk3MDkzODA3*_ga_CW55HF8NVT*MTY5NzEwMzM0NS4yLjEuMTY5NzEwNjg0My40OS4wLjA.",
  tablet:
    "https://firebasestorage.googleapis.com/v0/b/audiophile-ecommerce-ab33f.appspot.com/o/shared%2Ftablet%2Fimage-best-gear.jpg?alt=media&token=f84d5e13-bcd1-45d1-9b66-4f84f3ae0687&_gl=1*47nsew*_ga*MjA5NDQ3NzQxOC4xNjk3MDkzODA3*_ga_CW55HF8NVT*MTY5NzEwMzM0NS4yLjEuMTY5NzEwNjg1NS4zNy4wLjA.",
  desktop:
    "https://firebasestorage.googleapis.com/v0/b/audiophile-ecommerce-ab33f.appspot.com/o/shared%2Fdesktop%2Fimage-best-gear.jpg?alt=media&token=54194da3-47f4-420c-9fbe-a7afc900d818&_gl=1*1sfb68v*_ga*MjA5NDQ3NzQxOC4xNjk3MDkzODA3*_ga_CW55HF8NVT*MTY5NzEwMzM0NS4yLjEuMTY5NzEwNjgzMi42MC4wLjA.",
};

export default function CompanySummary() {
  return (
    <div className="container company-summary">
      <div>
        <img
          className="image-mobile company-summary-image"
          src={images.mobile}
          alt="man wearing headphones"
        />
        <img
          className="image-tablet company-summary-image"
          src={images.tablet}
          alt="man wearing headphones"
        />
        <img
          className="image-desktop company-summary-image"
          src={images.desktop}
          alt="man wearing headphones"
        />
      </div>
      <div className="company-summary-text">
        <h2>
          Bringing you the <mark className="color-accent">best</mark> audio gear
        </h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}
