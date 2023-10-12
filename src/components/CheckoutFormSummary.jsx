import React from 'react'
import CheckoutPricing from './CheckoutPricing'
import CheckoutProductList from './CheckoutProductList'

export default function CheckoutFormSummary() {


  return (
    <div className='checkout-summary'>
        <CheckoutProductList form={true} />
        <CheckoutPricing />
    </div>
  )
}
