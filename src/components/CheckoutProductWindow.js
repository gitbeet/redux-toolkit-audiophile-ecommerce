import React, { useEffect, useState } from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'
import QuantityButtons from './QuantityButtons'
import {useProductData} from '../context/ProductDataContext'
import {formatCurrency} from '../utilities/formatCurrency'
import '../css/CheckoutProductWindow.css'

export default function CheckoutProductWindow({product,form=false}) {

  const[cartImage,setCartImage] = useState()
  const {changeQuantity , shoppingCartProducts} = useShoppingCart()
  const {productData} = useProductData()

  const fullProductData = productData.find(prod => {
    return prod.slug === product.name
  })
  const {name,slug,price,image} = fullProductData

  useEffect(() => {
      import(`../assets/cart/image-${fullProductData.slug}.jpg`).then(image => setCartImage(image.default))
  },[])

  return (
    <div className={`${form ? 'checkout-product-window-form' : 'checkout-product-window'}`}>
      <div className='checkout-product-window-left'>
        <div className='checkout-product-image'>
          <img className='image-border' src={cartImage} alt='product' />
        </div>
        <div className={`${form ? 'checkout-product-text-form' : 'checkout-product-text'}`}>
          <h6 className='checkout-product-name'>{slug.split('-').splice(0,slug.split('-').length-1).join(' ')}</h6>
          <p className='color-gray checkout-product-price'>{formatCurrency(price)}</p>
        </div>
      </div>
      <div className='checkout-window-quantity-buttons'>
      {
        form && <h6 className='color-gray quantity-form'>x{shoppingCartProducts.find(prod => prod.name === product.name).quantity}</h6>
      }
      {  !form &&   <QuantityButtons
                  buttonLeft={() => changeQuantity( product.name ,'minus' )}
                  buttonRight={() => changeQuantity( product.name ,'plus' )}
                  quantity={shoppingCartProducts.find(prod => prod.name === product.name).quantity}/>
      }
      </div>
      </div>
  )
}
