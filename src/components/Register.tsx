import FormElement from "./FormElement";
import "../css/Register.css";
import { useFormik } from "formik";
import { registerFormValidation } from "../Validations/registerFormValidation";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { register, reset } from "../features/auth/userSlice";
import { useEffect, useState } from "react";
const Register = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [error, setError] = useState("");

  const { user, isError, message, isLoading } = useAppSelector(
    (state) => state.user
  );
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      password2: "",
    },
    onSubmit: (values) => {
      if (!formik.isValid) return;
      dispatch(reset());
      setError("");
      if (message === "auth/email-already-in-use") {
        setError("User with this email already exist");
        return;
      }
      const userData = {
        fullName: formik.values.fullName,
        email: formik.values.email,
        password: formik.values.password,
      };
      dispatch(register(userData));
    },
    validationSchema: registerFormValidation,
  });

  useEffect(() => {
    if (user) navigate("/");
  }, [navigate, user]);

  useEffect(() => {
    dispatch(reset());
  }, [user]);

  useEffect(() => {
    if (message === "auth/email-already-in-use") {
      setError("User with this email already exist");
      return;
    }
    if (message) {
      setError("Firebase error");
    }
  }, [message, isError]);

  return (
    <div className="register">
      <h1>Register</h1>
      <p className="text-error">{error}</p>
      <form
        onSubmit={formik.handleSubmit}
        className="form-container"
      >
        <FormElement
          placeholder="Alexei Ward"
          label="Name"
          error={formik.errors.fullName}
          touched={formik.touched.fullName}
          {...formik.getFieldProps("fullName")}
        />
        <FormElement
          placeholder="alexeiward@email.com"
          label="Email"
          error={formik.errors.email}
          touched={formik.touched.email}
          {...formik.getFieldProps("email")}
        />
        <FormElement
          type="password"
          placeholder="********"
          label="Password"
          error={formik.errors.password}
          touched={formik.touched.password}
          {...formik.getFieldProps("password")}
        />
        <FormElement
          type="password"
          placeholder="********"
          label="Confirm password"
          error={formik.errors.password2}
          touched={formik.touched.password2}
          {...formik.getFieldProps("password2")}
        />
        <button
          type="submit"
          className="btn btn-accent"
        >
          Register
        </button>
      </form>
      <p>
        Already have an account?
        <Link to="/login">
          <span className="link-bold"> Sign in</span>
        </Link>
      </p>
    </div>
  );
};

export default Register;
