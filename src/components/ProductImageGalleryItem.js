import React, {useEffect, useState } from 'react'
import '../css/ProductImageGalleryItem.css'

export default function ProductImageGalleryItem({images , area}) {

    const [mobileImage,setMobileImage] = useState()
    const [tabletImage,setTabletImage] = useState()
    const [desktopImage,setDesktopImage] = useState()  

    const mobImage = images[1].mobile.split('/').splice(2,images[1].mobile.length).join('/')
    const tabImage = images[1].tablet.split('/').splice(2,images[1].tablet.length).join('/')
    const deskImage = images[1].desktop.split('/').splice(2,images[1].desktop.length).join('/')
    

  useEffect(() => {
    import(`../assets/${mobImage}`).then( bg => setMobileImage(bg.default))
    import(`../assets/${tabImage}`).then( bg => setTabletImage(bg.default))
    import(`../assets/${deskImage}`).then( bg => setDesktopImage(bg.default))
  },[])


  return (
    <>
      <img 
          style={{gridArea:area}}
          className='image-mobile image-border' src={mobileImage} alt='gallery' />
      <img 
          style={{gridArea:area}}
          className='image-tablet image-border' src={tabletImage} alt='gallery' />
      <img 
          style={{gridArea:area}}
          className='image-desktop image-border' src={desktopImage} alt='gallery' />
    </>

  )
}
