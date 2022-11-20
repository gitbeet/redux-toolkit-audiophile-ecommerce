import '../css/QuantityButtons.css'
export default function QuantityButtons({buttonLeft,buttonRight,quantity}) {

  return (
    <div className='quantity-buttons'>
        <p onClick={buttonLeft} className='quantity-button'>-</p>
        <p className='quantity-number'>{quantity}</p>
        <p onClick={buttonRight} className='quantity-button'>+</p>
    </div>
  )
}
