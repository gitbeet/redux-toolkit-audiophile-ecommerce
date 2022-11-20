import FormElement from "./FormElement";
import "../css/Register.css";
import { useFormik } from "formik";
import { loginFormValidation } from "../Validations/loginFormValidation";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../features/auth/userSlice";
import { useEffect } from "react";
import { useState } from "react";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
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
      setError("");
      const userData = {
        email: formik.values.email,
        password: formik.values.password,
      };
      dispatch(login(userData));
    },
    validationSchema: loginFormValidation,
  });

  useEffect(() => {
    if (user) navigate("/");
  }, [navigate, user]);

  useEffect(() => {
    dispatch(reset());
  }, [user]);

  useEffect(() => {
    if (message === "auth/user-not-found") {
      setError("User with this account does not exist");
      return;
    }
    if (message === "auth/wrong-password") {
      setError("Wrong password");
      return;
    }
    if (message) {
      setError("Firebase error");
    }
  }, [message, isError]);

  return (
    <div className="register">
      <h1>Login</h1>
      <p className="text-error">{error}</p>
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
          type="password"
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
        Don't have an acoount yet?{" "}
        <Link to="/register">
          {" "}
          <span className="link-bold"> Sign up</span>
        </Link>
      </p>
    </div>
  );
};

export default Login;
