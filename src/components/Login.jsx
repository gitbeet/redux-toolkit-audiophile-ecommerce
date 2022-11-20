import FormElement from "./FormElement";
import "../css/Register.css";
import { useFormik } from "formik";
import { loginFormValidation } from "../Validations/loginFormValidation";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../features/auth/userSlice";
import { useEffect } from "react";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isError, message, isLoading } = useSelector(
    (state) => state.user
  );
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      if (!formik.isValid) return;
      const userData = {
        email: formik.values.email,
        password: formik.values.password,
      };
      dispatch(login(userData));
      //   navigate("/");
    },
    validationSchema: loginFormValidation,
  });

  useEffect(() => {
    if (user) navigate("/");
  }, [navigate, user]);

  useEffect(() => {
    dispatch(reset());
  }, [user]);

  return (
    <div className="register">
      <h1>Login</h1>
      <h2>
        {" "}
        {isError.toString()} {message},{isLoading.toString()}{" "}
      </h2>
      <form onSubmit={formik.handleSubmit} className="form-container">
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

        <button type="submit" className="btn btn-accent">
          Login
        </button>
      </form>
      <p>
        Don't have an acoount yet? <span> Sign up</span>
      </p>
    </div>
  );
};

export default Login;
