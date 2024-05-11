import { Formik, Form, Field, ErrorMessage } from "formik";
import { register } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import { useId } from "react";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";

const Schema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Too short!")
    .max(20, "Too long!")
    .required("Required"),
});

export const RegistrationForm = () => {
  const nameId = useId();
  const emailId = useId();
  const passId = useId();
  const dispatch = useDispatch();

  return (
    <div className={css["reg-div"]}>
      <h3>Registration</h3>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={Schema}
        onSubmit={(values, action) => {
          dispatch(register(values));
          action.resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form className={css["reg-form"]}>
            <label htmlFor={nameId}>Name</label>
            <Field name="name" className={css["reg-inputs"]} id={nameId} />
            {touched.name && errors.name && <div>{errors.name}</div>}

            <label htmlFor={emailId}>Email</label>
            <Field name="email" className={css["reg-inputs"]} id={emailId} />
            {touched.email && errors.email && <div>{errors.email}</div>}

            <label htmlFor={passId}>Password</label>
            <Field name="password" className={css["reg-inputs"]} id={passId} />
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
