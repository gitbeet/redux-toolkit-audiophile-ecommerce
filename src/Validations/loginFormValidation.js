import * as yup from "yup";
const reqMessage = `Can't be blank`;

export const loginFormValidation = yup.object().shape({
  email: yup
    .string("Invalid email")
    .email("Invalid email")
    .required(reqMessage),
  password: yup
    .string("Invalid password")
    .min(6, "Password too short.")
    .required(reqMessage),
});
