import { useFormik } from "formik";
import {
  checkoutFormSchemaEMoney,
  checkoutFormSchemaCOD,
} from "../Validations/checkoutFormValidation";
import CheckoutFormSummary from "../components/CheckoutFormSummary";
import { useNavigate } from "react-router-dom";
import FormElement from "../components/FormElement";
import FormRadioButtonElement from "../components/FormRadioButtonElement";
import "../css/CheckoutForm.css";
import { useAppDispatch } from "../hooks/reduxHooks";
import {
  toggleCheckoutWindow,
  toggleShowSuccessfulOrderWindow,
} from "../features/modals/modalsSlice";
export default function Checkout() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      zipCode: "",
      city: "",
      country: "",
      paymentMethod: "",
      eMoneyNumber: "",
      eMoneyPin: "",
    },
    onSubmit: () => {
      if (!formik.isValid) return;
      dispatch(toggleShowSuccessfulOrderWindow());
    },
    validationSchema: () => {
      return formik.values.paymentMethod === "eMoney"
        ? checkoutFormSchemaEMoney
        : checkoutFormSchemaCOD;
    },
  });

  function goBackToCheckout() {
    dispatch(toggleCheckoutWindow());
    navigate(-1);
  }
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="checkout-form"
    >
      <div className="checkout-wrapper">
        <p
          onClick={goBackToCheckout}
          className="color-gray cursor-pointer checkout-form-go-back"
        >
          Go back
        </p>
        <div className="checkout-form-desktop">
          <div className="checkout-form-desktop-form">
            <h3 className="checkout-form-checkout-header">checkout</h3>
            <h6 className="color-accent subtitle">billing details</h6>
            <div className="form-billing-details">
              <FormElement
                placeholder="Alexei Ward"
                label="Name"
                error={formik.errors.fullName}
                touched={formik.touched.fullName}
                {...formik.getFieldProps("fullName")}
              />
              <FormElement
                touched={formik.touched.email}
                label="Email"
                error={formik.errors.email}
                placeholder="alexei@mail.com"
                {...formik.getFieldProps("email")}
              />
              <FormElement
                touched={formik.touched.phone}
                label="Phone number"
                error={formik.errors.phone}
                placeholder="+1 202-555-0136"
                {...formik.getFieldProps("phone")}
              />
            </div>
            <h6 className="color-accent subtitle">shipping info</h6>
            <FormElement
              touched={formik.touched.address}
              label="Address"
              error={formik.errors.address}
              placeholder="1137 Williams Avenue"
              {...formik.getFieldProps("address")}
            />
            <div className="form-shipping-info">
              <FormElement
                touched={formik.touched.zipCode}
                label="ZIP code"
                error={formik.errors.zipCode}
                placeholder="10001"
                {...formik.getFieldProps("zipCode")}
              />
              <FormElement
                touched={formik.touched.city}
                label="City"
                error={formik.errors.city}
                placeholder="New York"
                {...formik.getFieldProps("city")}
              />
              <FormElement
                touched={formik.touched.country}
                label="Country"
                error={formik.errors.country}
                placeholder="United States"
                {...formik.getFieldProps("country")}
              />
            </div>
            <h6 className="color-accent subtitle">payment details</h6>
            <fieldset>
              <div className="form-payment-method">
                <div
                  className={`${
                    formik.errors.paymentMethod && formik.touched.paymentMethod
                      ? "checkout-form-label error-text"
                      : "checkout-form-label"
                  }`}
                >
                  <label htmlFor="paymentMethod">Payment method</label>
                </div>
                <div className="payment-methods">
                  <div
                    className={`${
                      formik.errors.paymentMethod &&
                      formik.touched.paymentMethod
                        ? "checkout-form-label payment-methods-label error-text show"
                        : "checkout-form-label payment-methods-label error-text hide"
                    }`}
                  >
                    <p>{formik.errors.paymentMethod}</p>
                  </div>
                  <FormRadioButtonElement
                    radioValue="eMoney"
                    touched={formik.touched.paymentMethod}
                    label="e-Money"
                    error={formik.errors.paymentMethod}
                    {...formik.getFieldProps("paymentMethod")}
                  />
                  <FormRadioButtonElement
                    radioValue="cashOnDelivery"
                    touched={formik.touched.paymentMethod}
                    label="Cash on delivery"
                    error={formik.errors.paymentMethod}
                    {...formik.getFieldProps("paymentMethod")}
                  />
                </div>
              </div>
            </fieldset>
            <div
              className={
                formik.values.paymentMethod === "eMoney"
                  ? "form-payment-numbers"
                  : "form-payment-numbers hide"
              }
            >
              <FormElement
                touched={formik.touched.eMoneyNumber}
                label="e-Money number"
                error={formik.errors.eMoneyNumber}
                placeholder="238521993"
                {...formik.getFieldProps("eMoneyNumber")}
                additionalClass="payment-number"
              />
              <FormElement
                touched={formik.touched.eMoneyPin}
                label="e-Money PIN"
                error={formik.errors.eMoneyPin}
                placeholder="6891"
                {...formik.getFieldProps("eMoneyPin")}
                additionalClass="payment-number"
              />
            </div>
          </div>
          <div className="checkout-form-desktop-summary">
            <h6 className="checkout-form-text-summary">summary</h6>
            <CheckoutFormSummary />
            <button
              className="btn-accent"
              type="submit"
            >
              continue & pay
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
