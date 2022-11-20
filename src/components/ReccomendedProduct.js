import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/ReccomendedProduct.css'

export default function ReccomendedProduct({reccomendedProduct , category}) {

  const {name,slug,image} = reccomendedProduct
  
  const [mobileImage,setMobileImage] = useState()
  const [tabletImage,setTabletImage] = useState()
  const [desktopImage,setDesktopImage] = useState()  

// console.log(`../assets/shared/mobile/${slug}.jpg`)

useEffect(() => {
  import(`../assets/shared/mobile/image-${slug}.jpg`).then( bg => setMobileImage(bg.default))
  import(`../assets/shared/tablet/image-${slug}.jpg`).then( bg => setTabletImage(bg.default))
  import(`../assets/shared/desktop/image-${slug}.jpg`).then( bg => setDesktopImage(bg.default))
},[image])



  return (
    <div className='reccomended-product'>
      <img className='image-mobile image-border' src={mobileImage} alt='product' />
      <img className='image-tablet image-border' src={tabletImage} alt='product' />
      <img className='image-desktop image-border' src={desktopImage} alt='product' />
      <h5>{name}</h5>
      <Link to={`/${category}/${slug}`}><button className='btn-accent'>see product</button></Link>
    </div>
  )
}
