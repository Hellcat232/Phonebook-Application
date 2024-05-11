import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./LoginForm.module.css";
import { login } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import { useId } from "react";
import * as Yup from "yup";

const Schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Too short!")
    .max(20, "Too long!")
    .required("Required"),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const emailId = useId();
  const passId = useId();

  return (
    <div className={css["form-div"]}>
      <h3>Login</h3>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Schema}
        onSubmit={(values, action) => {
          dispatch(login(values));
          action.resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form className={css["login-form"]}>
            <label htmlFor={emailId}>Email</label>
            <Field name="email" className={css["login-inputs"]} />
            {touched.email && errors.email && <div>{errors.email}</div>}

            <label htmlFor={passId}>Password</label>
            <Field name="password" className={css["login-inputs"]} />
            {touched.password && errors.password && (
              <div>{errors.password}</div>
            )}
            <button type="submit" className={css["submit-btn"]}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
