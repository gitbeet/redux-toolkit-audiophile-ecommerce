import icon from '../assets/checkout/icon-order-confirmation.svg'
import SuccessfulOrderProductWindow from './SuccessfulOrderProductWindow'
import {usePopUp} from '../context/PopUpContext'
import '../css/SuccessfulOrder.css'
import { useNavigate } from 'react-router-dom'

export default function SuccessfulOrder() {

  const navigate = useNavigate()
  const {backToHome} = usePopUp()

  function successfulOrderGoHome(){
    backToHome()
    navigate('/')
  }

  return (
    <div className='successful-order'>
      <img className='confirmation-icon' src={icon} alt='confirmation icon' />
      <h2>thank you<br/>for your order</h2>
      <p className='color-gray'>You will recieve an email confirmation shortly.</p>
      <SuccessfulOrderProductWindow />
      <button onClick={successfulOrderGoHome} className='btn-accent'>back to home</button>
    </div>

  )
}
