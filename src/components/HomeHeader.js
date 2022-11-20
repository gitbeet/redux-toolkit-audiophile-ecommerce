import imageHeaderMobile from '../assets/home/mobile/image-header.jpg'
import imageHeaderTablet from '../assets/home/tablet/image-header.jpg'
import imageHeaderDesktop from '../assets/home/desktop/image-hero.jpg'
import '../css/HomeHeader.css'
import { Link } from 'react-router-dom'

export default function HomeHeader() {
  return (
    <div className='home-header'>
        <Link to='/headphones/xx99-mark-two-headphones'><button className='btn-accent header-btn'>see product</button></Link>
      <div className='header-text'>
        <p className='overline header-text-muted header-new-product'>new product</p>
        <h1 className='header-name'>xx99 mark ii headphones</h1>
        <p className='header-description'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
      </div>
      <img className="image-mobile header-image" src={imageHeaderMobile} alt='header' />
      <img className="image-tablet header-image" src={imageHeaderTablet} alt='header' />
      <img className="image-desktop header-image" src={imageHeaderDesktop} alt='header' />
    </div>
  )
}
