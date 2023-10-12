import { usePopUp } from '../context/PopUpContext'
import '../css/Backdrop.css'


export default function Backdrop({  
                                    clickFunction,
                                    zIndexValue= 19,
                                   }) 
{

  const {showMobileMenu,showCheckoutWindow} = usePopUp()

  return (
    <div  onClick={clickFunction}  
          style={{zIndex:zIndexValue}}
          className='backdrop'>      
    </div>
  )
}
