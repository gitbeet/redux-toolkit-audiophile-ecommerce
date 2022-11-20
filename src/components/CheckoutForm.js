import React from "react";
import { useFormik } from "formik";
import { checkoutFormSchema } from "../Validations/checkoutFormValidation";
import CheckoutFormSummary from "./CheckoutFormSummary";
import { usePopUp } from "../context/PopUpContext";
import { useNavigate } from "react-router-dom";
import FormElement from "./FormElement";
import FormRadioButtonElement from "./FormRadioButtonElement";
import "../css/CheckoutForm.css";

export default function CheckoutForm() {
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
    onSubmit: (values) => {
      if (!formik.isValid) return;
      toggleSuccessfulOrderWindow();
    },
    validationSchema: checkoutFormSchema,
  });

  const navigate = useNavigate();
  const { toggleCheckoutWindow, toggleSuccessfulOrderWindow } = usePopUp();

  function goBackToCheckout() {
    toggleCheckoutWindow();
    navigate(-1);
  }
  return (
    <div className="checkout-form">
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
                name="fullName"
                placeholder="Alexei Ward"
                label="Name"
                error={formik.errors.fullName}
                touched={formik.touched.fullName}
                {...formik.getFieldProps("fullName")}
              />
              <FormElement
                name="email"
                touched={formik.touched.email}
                label="Email"
                error={formik.errors.email}
                placeholder="alexei@mail.com"
                {...formik.getFieldProps("email")}
              />
              <FormElement
                name="phone"
                touched={formik.touched.phone}
                label="Phone number"
                error={formik.errors.phone}
                placeholder="+1 202-555-0136"
                {...formik.getFieldProps("phone")}
              />
            </div>
            <h6 className="color-accent subtitle">shipping info</h6>
            <FormElement
              name="address"
              touched={formik.touched.address}
              label="Address"
              error={formik.errors.address}
              placeholder="1137 Williams Avenue"
              {...formik.getFieldProps("address")}
            />
            <div className="form-shipping-info">
              <FormElement
                name="zipCode"
                touched={formik.touched.zipCode}
                label="ZIP code"
                error={formik.errors.zipCode}
                placeholder="10001"
                {...formik.getFieldProps("zipCode")}
              />
              <FormElement
                name="city"
                touched={formik.touched.city}
                label="City"
                error={formik.errors.city}
                placeholder="New York"
                {...formik.getFieldProps("city")}
              />
              <FormElement
                name="country"
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
                    name="paymentMethod"
                    touched={formik.touched.paymentMethod}
                    label="e-Money"
                    error={formik.errors.paymentMethod}
                    {...formik.getFieldProps("paymentMethod")}
                  />
                  <FormRadioButtonElement
                    radioValue="cashOnDelivery"
                    name="paymentMethod"
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
                name="eMoneyNumber"
                touched={formik.touched.eMoneyNumber}
                label="e-Money number"
                error={formik.errors.eMoneyNumber}
                placeholder="238521993"
                {...formik.getFieldProps("eMoneyNumber")}
                additionalClass="payment-number"
              />
              <FormElement
                name="eMoneyPin"
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
            <button onClick={formik.handleSubmit} className="btn-accent">
              continue & pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
