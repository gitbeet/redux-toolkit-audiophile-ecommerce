import imageBestGearMobile from  '../assets/shared/mobile/image-best-gear.jpg'
import imageBestGearTablet from  '../assets/shared/tablet/image-best-gear.jpg'
import imageBestGearDesktop from  '../assets/shared/desktop/image-best-gear.jpg'
import '../css/CompanySummary.css'

export default function CompanySummary() {
  return (
    <div className='container company-summary'>
      <div>
        <img className='image-mobile company-summary-image' src={imageBestGearMobile} alt='man wearing headphones'/>
        <img className='image-tablet company-summary-image' src={imageBestGearTablet} alt='man wearing headphones'/>
        <img className='image-desktop company-summary-image' src={imageBestGearDesktop} alt='man wearing headphones'/>
      </div>
      <div className='company-summary-text'>
        <h2>Bringing you the <mark className='color-accent'>best</mark> audio gear</h2>
        <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
      </div>
    </div>
  )
}
