import React from 'react'
import ReccomendedProduct from './ReccomendedProduct'
import '../css/ReccomendedList.css'

export default function ReccomendedList({product}) {
  return (
    <div className='reccomended-list text-center'>
        <h3>you may also like</h3>
      <div className='reccomended-list-container'>
          {product.others.map((reccomendedProduct,index) => {
            return <ReccomendedProduct key={index} reccomendedProduct={reccomendedProduct} category={product.category}/>
          })}
      </div>
    </div>
  )
}
