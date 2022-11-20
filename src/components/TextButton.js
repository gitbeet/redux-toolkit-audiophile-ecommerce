import '../css/TextButton.css'

export default function TextButton({clickFunction , underline =false , text= 'Go Back' }) {
  return (
    <p style={{textDecoration: underline ? 'underline' : 'none'}} onClick={clickFunction} className='color-gray cursor-pointer go-back-button'>
      {text}
    </p>
  )
}
