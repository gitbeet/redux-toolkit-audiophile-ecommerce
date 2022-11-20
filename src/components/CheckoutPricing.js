import React from 'react'
import { useProductData } from '../context/ProductDataContext'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { formatCurrency } from '../utilities/formatCurrency'
import '../css/CheckoutPricing.css'

export default function CheckoutPricing() {

    const {shoppingCartProducts} = useShoppingCart()
    const {productData} = useProductData() 

    let totalPrice = shoppingCartProducts.reduce((acc,product) => acc +  product.quantity*(productData.find(prod => prod.slug === product.name).price) , 0)



  return (
    <div className='checkout-pricing'>
        <section>
            <h6 className='color-gray subtitle checkout-total'>total</h6>
            <h6>{formatCurrency(totalPrice)}</h6>
        </section>
        <section>
            <h6 className='color-gray subtitle checkout-total'>shipping</h6>
            <h6>{formatCurrency(50)}</h6>
        </section>
        <section>
            <h6 className='color-gray subtitle checkout-total'>vat(included)</h6>
            <h6>{formatCurrency(totalPrice*.2)}</h6>
        </section>     
        <section>
            <h6 className='color-gray subtitle checkout-total'>grand total</h6>
            <h6 className='color-accent'>{formatCurrency(totalPrice+50+totalPrice*.2)}</h6>
        </section>
    </div>
  )
}
