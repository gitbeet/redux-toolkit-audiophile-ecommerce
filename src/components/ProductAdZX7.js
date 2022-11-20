import React from 'react'
import '../css/ProductAdZX7.css'
import productImageMobile from '../assets/home/mobile/image-speaker-zx7.jpg'
import productImageTablet from '../assets/home/tablet/image-speaker-zx7.jpg'
import productImageDesktop from '../assets/home/desktop/image-speaker-zx7.jpg'
import { Link } from 'react-router-dom'
export default function ProductAdZX7() {
  return (
    <div className='zx7'>
      <div className='zx7-text'>
        <h4>zx7 speaker</h4>
        <Link to='/speakers/zx7-speaker'><button className='btn-transparent'>see product</button></Link>
      </div>
      <img  className='zx7-image image-mobile' src={productImageMobile} alt='zx7 speaker' />
      <img  className='zx7-image image-tablet' src={productImageTablet} alt='zx7 speaker' />
      <img  className='zx7-image image-desktop' src={productImageDesktop} alt='zx7 speaker' />
    </div>
  )
}
