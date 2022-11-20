import React from 'react'
import '../css/ProductAdYX1.css'
import productImageMobile from '../assets/home/mobile/image-earphones-yx1.jpg'
import productImageTablet from '../assets/home/tablet/image-earphones-yx1.jpg'
import productImageDesktop from '../assets/home/desktop/image-earphones-yx1.jpg'



export default function ProductAdYX1() {
  return (
    <div className='yx1'>
      <div className='yx1-image'>
        <img  className='image-mobile' src={productImageMobile} alt='yx1 earphones' />
        <img  className='image-tablet' src={productImageTablet} alt='yx1 earphones' />
        <img  className='image-desktop' src={productImageDesktop} alt='yx1 earphones' />
      </div>
      <div className='yx1-text'>
          <h4>yx1 earphones</h4>
          <button className='btn-transparent'>see product</button>
      </div>
    </div>
  )
}
