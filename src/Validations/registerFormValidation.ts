import * as yup from "yup";
const reqMessage = `Can't be blank`;

export const registerFormValidation = yup.object().shape({
  fullName: yup.string().max(30, "Invalid name").required(reqMessage),
  email: yup.string().email("Invalid email").required(reqMessage),
  password: yup
    .string()
    .min(6, "Password too short.")
    .oneOf([yup.ref("password2"), null], "Passwords do not match")
    .required(reqMessage),
  password2: yup
    .string()
    .min(6, "Password too short.")
    .oneOf([yup.ref("password"), null], "Passwords do not match")
    .required(reqMessage),
});
