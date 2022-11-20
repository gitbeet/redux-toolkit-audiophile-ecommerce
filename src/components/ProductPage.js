import React, { useEffect, useState } from 'react'
import { Link , useParams , useNavigate } from 'react-router-dom'
import { formatCurrency } from '../utilities/formatCurrency'
import { useProductData } from '../context/ProductDataContext'
import PageNotFound from './PageNotFound'
import InTheBoxList from './InTheBoxList'
import ProductImageGallery from './ProductImageGallery'
import ReccomendedList from './ReccomendedList'
import CategoryList from './CategoryList'
import '../css/ProductPage.css'
import AddToCart from './AddToCart'
import TextButton from './TextButton'

export default function ProductPage() {


  const navigate = useNavigate()

    const {productName} = useParams()
    const {productData} = useProductData() 
    
    const [mobileImage,setMobileImage] = useState()
    const [tabletImage,setTabletImage] = useState()
    const [desktopImage,setDesktopImage] = useState()  
    
    const product = productData.find(product => product.slug === productName) || ''

    useEffect(() => {
      if(!product) return
      window.scrollTo(0, 0)
      import(`../assets/product-${product.slug}/mobile/image-product.jpg`).then( bg => setMobileImage(bg.default))
      import(`../assets/product-${product.slug}/tablet/image-product.jpg`).then( bg => setTabletImage(bg.default))
      import(`../assets/product-${product.slug}/desktop/image-product.jpg`).then( bg => setDesktopImage(bg.default))
    },[product])
    
    if(!product) return <PageNotFound />
  return (
    <>
    <div className='container product-page-container'>
      <div className='product-page-go-back-button'>
        <TextButton clickFunction={() => navigate(-1)}/>
      </div>
      <section className='product-page-top-section'>
        <div className='product-page-image-section'>
          <img className='image-border image-mobile' src={mobileImage} alt='product'/>
          <img className='image-border image-tablet' src={tabletImage} alt='product'/>
          <img className='image-border image-desktop' src={desktopImage} alt='product'/>
        </div>
        <div className='product-page-top-section-text'>
          {product.new && <h6 className='overline color-accent product-page-new-product'>new product</h6>}
          <h2 className='product-page-name'>{product.name}</h2>
          <p className='color-gray'>{product.description}</p>
          <h6 className='product-page-price'>{formatCurrency(product.price)}</h6>
          <AddToCart product={product}/>
        </div>
      </section>
      <div className='desktop-features-inthebox'>
        <section>
          <h3>features</h3>
          <p className='color-gray product-page-features'>{product.features}</p>
        </section>
        <section className='product-page-in-the-box-section'>
          <h3>in the box</h3>
          <InTheBoxList includes={product.includes}/>
        </section>
      </div>
      <ProductImageGallery gallery={product.gallery} />
      <ReccomendedList product={product}/>
      <CategoryList />
    </div>
    </>
  )
}
