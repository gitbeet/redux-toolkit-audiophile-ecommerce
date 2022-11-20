import React, { useEffect } from 'react'
import {useShoppingCart} from '../context/ShoppingCartContext'
import CheckoutProductWindow from './CheckoutProductWindow'
import { useProductData } from '../context/ProductDataContext'
import { formatCurrency } from '../utilities/formatCurrency'
import '../css/SuccessfulOrderProductWindow.css'

export default function SuccessfulOrderProductWindow() {

  useEffect(() => {
    window.scrollTo(0,0)
  },[])

    const {shoppingCartProducts} = useShoppingCart()
    const {productData} = useProductData()
    const otherItems = shoppingCartProducts.length-1
    let totalPrice = shoppingCartProducts.reduce((acc,product) => acc +  product.quantity*(productData.find(prod => prod.slug === product.name).price) , 0)
  return (
    <div className='successful-order-product-window'>
      <div className='successful-order-top'>
        <div className={`${otherItems > 0 ? 'successful-order-product-first border-bottom' : 'successful-order-product-first '}`}>
          <CheckoutProductWindow
                    product={shoppingCartProducts[0]}
                    form={true} />
        </div>
        {otherItems > 0 && <p className='color-gray text-center'>and {otherItems} other item{ otherItems>1 ? 's' : ''}</p>}
      </div>
      <div className='successful-order-bottom'>
        <h6 className='successful-order-grand-total'>grand total</h6>
        <h6 className='successful-order-price'>{formatCurrency(totalPrice+50+totalPrice*.2)}</h6>
      </div>
    </div>
  )
}
