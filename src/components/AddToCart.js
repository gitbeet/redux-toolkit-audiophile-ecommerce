import React, { useState ,useEffect } from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'
import '../css/AddToCart.css'
import QuantityButtons from './QuantityButtons'

export default function AddToCart({product}) {


  const {addToCart} = useShoppingCart()
  const [quantity,setQuantity] = useState(0)

  useEffect(() => {
    setQuantity(0)
  },[product])


  return (
    <div className='add-to-cart'>
      <QuantityButtons buttonLeft={() => setQuantity(prev => prev < 1 ? 0 : prev - 1)}
                       buttonRight={() => setQuantity(prev => prev + 1)}
                       quantity={quantity}/>
      <button onClick={() => addToCart(product.slug,quantity)}
              className='btn-accent'>add to cart</button>
    </div>
  )
}
