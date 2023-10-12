interface Props {
  touched: boolean | undefined;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  radioValue: string;
  error: string | undefined;
  value: string;
  label: string;
  name: string;
}

export default function FormRadioButtonElement({
  touched,
  onBlur,
  onChange,
  error,
  value,
  radioValue,
  label,
  name,
}: Props) {
  return (
    <div
      className={`${
        !error && value === radioValue
          ? "radio-button border-accent"
          : error && touched
          ? "radio-button input-error"
          : "radio-button"
      }`}
    >
      <label
        htmlFor={radioValue}
        className="radio-label"
      >
        {label}
      </label>
      <input
        id={radioValue}
        name={name}
        onBlur={onBlur}
        value={radioValue}
        type="radio"
        checked={value === radioValue}
        onChange={onChange}
        className="radio-button-payment-method"
      />
    </div>
  );
}
