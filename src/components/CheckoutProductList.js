import React from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'
import CheckoutProductWindow from './CheckoutProductWindow'
import '../css/CheckoutProductList.css'

export default function CheckoutProductList({form = false}) {

    const {shoppingCartProducts} = useShoppingCart()

  return (
    <div className='checkout-product-list'>
      {shoppingCartProducts.map(product => {
        return <CheckoutProductWindow form={form} key={product.name} product={product}/>
      })}
    </div>
  )
}
