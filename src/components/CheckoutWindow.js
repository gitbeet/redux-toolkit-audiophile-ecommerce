import React, { useState } from 'react'
import * as ReactDOM from 'react-dom'
import { useProductData } from '../context/ProductDataContext'
import {useShoppingCart} from '../context/ShoppingCartContext'
import '../css/CheckoutWindow.css'
import CheckoutProductList from './CheckoutProductList'
import {formatCurrency} from '../utilities/formatCurrency'
import { usePopUp } from '../context/PopUpContext'
import Backdrop from './Backdrop'
import { useNavigate } from 'react-router-dom'
import TextButton from './TextButton'

export default function CheckoutWindow() {

    const navigate = useNavigate()
    const {shoppingCartProducts,removeAll} = useShoppingCart()
    const {productData} = useProductData() 
    const {hideCheckoutWindow} = usePopUp()
    const [error,setError] = useState()
    const [visible,setVisible] = useState(false)

    let totalProductNumber = shoppingCartProducts.reduce((acc,product) => acc + 1 , 0)
    let totalPrice = shoppingCartProducts.reduce((acc,product) => acc +  product.quantity*(productData.find(prod => prod.slug === product.name).price) , 0)


    function checkout(){    
        setError('')
        if(shoppingCartProducts.length === 0 || shoppingCartProducts.reduce((acc,product) => acc + product.quantity , 0) === 0 ) {
            setError('You have no products in the cart.')
            setVisible(true)
            setTimeout(() => {
                setVisible(false)
            },3000)
            return
        }
        hideCheckoutWindow()
        navigate('/checkout')
    }

  return (
    ReactDOM.createPortal(
        <>
            <Backdrop clickFunction={hideCheckoutWindow}/>
                <div className='checkout-window'>
                <section>
                    <h6  className='checkout-cart' >cart ({totalProductNumber})</h6>
                    <div className='remove-all'>
                        <TextButton clickFunction={removeAll} underline={true} text='Remove all'/>
                    </div>
                </section>            
                <CheckoutProductList />              
                <section>
                    <h6 className='color-gray subtitle checkout-total'>total</h6>
                    <h6>{formatCurrency(totalPrice)}</h6>
                </section>
                <p className={`${ visible ? 'checkout-window-error-message error-text' : 'message-fade-out error-text'}`}>{error}</p>
                <button onClick={checkout} className='btn-accent'>checkout</button>
            </div>
        </>,
        document.getElementById('checkout-window')
    )
  )
}

