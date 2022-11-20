import FormElement from "./FormElement";
import "../css/Register.css";
import { useFormik } from "formik";
import { registerFormValidation } from "../Validations/registerFormValidation";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../features/auth/userSlice";
import { useEffect } from "react";
const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isError, message, isLoading } = useSelector(
    (state) => state.user
  );
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      pasword2: "",
    },
    onSubmit: (values) => {
      if (!formik.isValid) return;
      const userData = {
        email: formik.values.email,
        password: formik.values.password,
      };
      dispatch(register(userData));
      navigate("/");
    },
    validationSchema: registerFormValidation,
  });

  useEffect(() => {
    if (user) navigate("/");
  }, [navigate, user]);

  useEffect(() => {
    dispatch(reset());
  }, [user]);

  console.log("message", message);
  console.log("user", user);

  return (
    <div className="register">
      <h1>Register</h1>

      <form onSubmit={formik.handleSubmit} className="form-container">
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
          placeholder="alexeiward@email.com"
          label="Email"
          error={formik.errors.email}
          touched={formik.touched.email}
          {...formik.getFieldProps("email")}
        />
        <FormElement
          name="password"
          placeholder="********"
          label="Password"
          error={formik.errors.password}
          touched={formik.touched.password}
          {...formik.getFieldProps("password")}
        />
        <FormElement
          name="password2"
          placeholder="********"
          label="Confirm password"
          error={formik.errors.password2}
          touched={formik.touched.password2}
          {...formik.getFieldProps("password2")}
        />
        <button type="submit" className="btn btn-accent">
          Register
        </button>
      </form>
      <p>
        Alredy have an account?<span>Sign in</span>
      </p>
    </div>
  );
};

export default Register;
