import React from 'react'
import ProductImageGalleryItem from './ProductImageGalleryItem'
import '../css/ProductImageGallery.css'

export default function ProductImageGallery({gallery}) {

  return (
    <div className='gallery-container'>
    <div  className='gallery-wrapper'>
      {
          Object.entries(gallery).map( (images,index) => {
              return <ProductImageGalleryItem
                                          area={`${index === 0 ? 'topLeft' : index === 1 ? 'bottomLeft' : 'right'}`}
                                          key={index}
                                          images={images}
                                          />
          })
      }
    </div>
    </div>
  )
}
