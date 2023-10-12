import React from 'react'
import * as ReactDOM from 'react-dom'
import CategoryList from './CategoryList'
import '../css/MobileMenu.css'
import Backdrop from './Backdrop'
import { usePopUp } from '../context/PopUpContext'

export default function MobileMenu() {

  const {showMobileMenu,toggleMobileMenu} = usePopUp()

  return (
    ReactDOM.createPortal(
    <>
      <div className={`${showMobileMenu ? 'mobile-menu show-animation' : 'mobile-menu hide-animation'}`}>
        <CategoryList mobileMenu={true} />
      </div>
      {showMobileMenu && <Backdrop clickFunction={toggleMobileMenu}/>}
    </> ,
    document.getElementById('mobile-menu')
    )
  )
}
