export default function FormElement({  touched=false,
                                       onBlur,
                                       onChange,
                                       error,
                                       value,
                                       label,
                                       name,
                                       placeholder,
                                       additionalClass= ''}) {


  return (
    <div className={`checkout-field ${additionalClass}`}>
    <div className={`${error && touched  ? 'checkout-form-label error-text' : 'checkout-form-label'}`}>
        <label htmlFor='fullName'>{label}</label>
        <p className={`${ error && touched ? 'error-text show' : 'error-text hide'}`}>{error}</p>
    </div>
    <input id={name}
           value={value}
           onBlur={onBlur}
           name={name}
           placeholder={placeholder}
           onChange={onChange}
           className={`${error && touched ? 'input-error' : ''}`}
           />
  </div>
  )
}
