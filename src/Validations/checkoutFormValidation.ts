import * as yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const reqMessage = `Can't be blank`;

export const checkoutFormSchemaEMoney = yup.object().shape({
  fullName: yup.string().max(30, "Invalid name").required(reqMessage),

  email: yup.string().email("Invalid email").required(reqMessage),

  phone: yup
    .string()
    .matches(phoneRegExp, "Invalid phone number")
    .required(reqMessage),

  address: yup.string().required(reqMessage),

  zipCode: yup
    .string()
    .min(4, "Invalid ZIP code")
    .max(5, "Invalid ZIP code ")
    .required(reqMessage),

  city: yup.string().max(20, "Invalid city").required(reqMessage),

  country: yup.string().max(20, "Invalid country").required(reqMessage),

  paymentMethod: yup.string().required("Please select a payment method"),

  eMoneyNumber: yup
    .string()
    .matches(/^\d{9}$/, "Invalid e-Money number")
    .min(9, "Invalid e-Money number")
    .max(9, "Invalid e-Money number")
    .required(reqMessage),

  eMoneyPin: yup
    .string()
    .matches(/^\d{4}$/, "Invalid e-Money number")
    .min(4, "Invalid e-Money number")
    .max(4, "Invalid e-Money number")
    .required(reqMessage),
});

export const checkoutFormSchemaCOD = yup.object().shape({
  fullName: yup.string().max(30, "Invalid name").required(reqMessage),

  email: yup.string().email("Invalid email").required(reqMessage),

  phone: yup
    .string()
    .matches(phoneRegExp, "Invalid phone number")
    .required(reqMessage),

  address: yup.string().required(reqMessage),

  zipCode: yup
    .string()
    .min(4, "Invalid ZIP code")
    .max(5, "Invalid ZIP code ")
    .required(reqMessage),

  city: yup.string().max(20, "Invalid city").required(reqMessage),

  country: yup.string().max(20, "Invalid country").required(reqMessage),

  paymentMethod: yup.string().required("Please select a payment method"),
});
