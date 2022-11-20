import React from 'react'
import productImageMobile from '../assets/home/mobile/image-speaker-zx9.png'
import productImageTablet from '../assets/home/tablet/image-speaker-zx9.png'
import productImageDesktop from '../assets/home/desktop/image-speaker-zx9.png'
import patternCircles from '../assets/home/desktop/pattern-circles.svg'
import '../css/ProductAdZX9.css'
import { Link } from 'react-router-dom'

export default function ProductAdZX9() {
  return (
    <div className='product-ad-square'>
      <img className='image-mobile image-product-ad-square' src={productImageMobile} alt='zx9 speaker' />
      <img className='image-tablet image-product-ad-square' src={productImageTablet} alt='zx9 speaker' />
      <img className='image-desktop image-product-ad-square' src={productImageDesktop} alt='zx9 speaker' />
      <img className='circles-pattern' src={patternCircles} alt='circle pattern behind speaker' />
      <h1 className='product-ad-square-name'>zx9 speaker</h1>
      <p className='text-center product-ad-square-description'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
      <div className='button-ad-square'>
        <Link to='/headphones/zx9-speaker'><button className='btn-primary'>see product</button></Link>
      </div>
    </div>
  )
}
