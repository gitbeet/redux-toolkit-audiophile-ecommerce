import React from 'react'
import Backdrop from './Backdrop'
import SuccessfulOrder from './SuccessfulOrder'

export default function SuccessfulOrderWindow() {
  return (
    <div>
      <SuccessfulOrder />
      <Backdrop zIndexValue={20} />
    </div>
  )
}
