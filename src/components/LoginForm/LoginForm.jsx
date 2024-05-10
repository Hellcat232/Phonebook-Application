import { Formik, Form, Field, ErrorMessage } from "formik";
import { login } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
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

  return (
    <div>
      <h1>Login</h1>
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
          <Form>
            <Field name="email" />
            {touched.email && errors.email && <div>{errors.email}</div>}

            <Field name="password" />
            {touched.password && errors.password && (
              <div>{errors.password}</div>
            )}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
