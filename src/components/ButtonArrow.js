import React from 'react'
import iconArrowRight from '../assets/shared/desktop/icon-arrow-right.svg'
import '../css/ButtonArrow.css'
import {usePopUp} from '../context/PopUpContext'


export default function ButtonArrow({text, mobileMenu}) {

  const {toggleMobileMenu} = usePopUp()

  return (
    <button onClick={mobileMenu ? () => toggleMobileMenu() : () => {}} className='button-arrow'>
      <p className='subtitle'>{text}</p>
      <img className='button-arrow-icon' src={iconArrowRight} alt='button arrow icon' />
    </button>
  )
}
