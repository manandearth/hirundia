import React, { useRef, Fragment } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const t = require("../translations/translate_es.json");

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(20, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .max(20, "Too Long!")
    .required("Required"),
  username: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(8, "Too short!")
    .max(8, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email()
    .required()
});

const validationError = field => (
  <div>
    <small className="text-danger">{field}</small>
  </div>
);

const Form = props => {
  //TODO submit to backend somehow..
  const formEl = useRef(null);
  const htmlSubmit = values => {
    console.log(errors);
    setSubmitting(true);
    formEl.current.submit();
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isSubmitting,
    setSubmitting,
    setFieldValue,
    setFieldTouched
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      email: ""
    },
    validationSchema
  });

  return (
    <Fragment>
      <div className="card">
        <form
          method="POST"
          ref={formEl}
          action={
            //TODO what new url ?
            "/nests-insert"
          }
          onSubmit={htmlSubmit}
        >
          <div className="form-group row">
            <div className="col-auto">
              <label className="my-1 mr-2 text-capitalize">
                {t.firstName}
                <input
                  className="form-control mx-sm-1"
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </label>
              {errors.firstName &&
                touched.firstName &&
                validationError(errors.firstName)}
            </div>
            <div className="col-auto">
              <label className="my-1 mr-2 text-capitalize">
                {t.lastName}
                <input
                  className="form-control ma-sm-1"
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  value={values.lastName}
                  onBlur={handleBlur}
                />
              </label>
              {errors.lastName &&
                touched.lastName &&
                validationError(errors.lastName)}
            </div>
          </div>
          <div className="form-group row">
            <div className="col-auto">
              <label className="my-1 mr-2 text-capitalize">
                {t.username}
                <input
                  className="form-control mx-sm-1"
                  type="text"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </label>
              {errors.username &&
                touched.username &&
                validationError(errors.username)}
            </div>
            <div className="col-auto">
              <label className="my-1 mr-2 text-capitalize">
                {t.password}
                <input
                  className="form-control ma-sm-1"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                  onBlur={handleBlur}
                />
              </label>
              {errors.password &&
                touched.password &&
                validationError(errors.password)}
            </div>
          </div>
          <div className="form-group row">
            <div className="col-auto">
              <label className="my-1 mr-2 text-capitalize">
                {t.email}
                <input
                  className="form-control mx-sm-1"
                  type="text"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </label>
              {errors.email && touched.email && validationError(errors.email)}
            </div>
          </div>

          <button
            className="btn btn-primary mb-2 text-capitalize"
            value={t.register}
            disabled={isSubmitting || Object.keys(errors).length > 0}
            onClick={() => console.log(errors)}
          >
            {t.register}
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Form;
