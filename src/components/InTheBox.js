import React from 'react'
import '../css/InTheBox.css'

export default function InTheBox({item}) {
  return (
   
      <p><span className='color-accent'>{`${item.quantity}x`}</span><span className='color-gray in-the-box'>{item.item}</span></p>
   
  )
}
