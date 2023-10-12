interface Props {
  touched: boolean | undefined;
  type?: string;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string | undefined;
  value: string;
  label: string;
  name: string;
  placeholder: string;
  additionalClass?: string;
}

export default function FormElement({
  touched = false,
  type = "text",
  onBlur,
  onChange,
  error,
  value,
  label,
  name,
  placeholder,
  additionalClass = "",
}: Props) {
  return (
    <div className={`checkout-field ${additionalClass}`}>
      <div
        className={`${
          error && touched
            ? "checkout-form-label error-text"
            : "checkout-form-label"
        }`}
      >
        <label htmlFor="fullName">{label}</label>
        <p
          className={`${
            error && touched ? "error-text show" : "error-text hide"
          }`}
        >
          {error}
        </p>
      </div>
      <input
        id={name}
        type={type}
        value={value}
        onBlur={onBlur}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className={`${error && touched ? "input-error" : ""}`}
      />
    </div>
  );
}
