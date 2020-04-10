import React, { Fragment } from "react";
import { Formik } from "formik";
import Select from "react-select";
const t = require("../translations/translate_es.json");

const Form = props => {
  const constructions = ["window", "cornice", "crack", "cables", "gable"];

  const constructionOptions = constructions.map(construction => {
    return { value: construction, label: t[construction] };
  });

  const handleOnChange = () => console.log("sophie was here");

  const birds = [
    "swallow",
    "swift",
    "martin",
    "pallid_swift",
    "red_rumped_swallow"
  ];

  const speciesOptions = birds.map(bird => {
    return { value: bird, label: t[bird] };
  });

  return (
    <Fragment>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
          /* and other goodies */
        }) => (
          <div className="card">
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="language" value="spanish" />
              <div className="form-group row">
                <div className="col-auto">
                  <label className="my-1 mr-2 text-capitalize">
                    {t.street}
                    <input
                      className="form-control mx-sm-1"
                      type="text"
                      name="street"
                      onChange={() => handleOnChange}
                    />
                  </label>
                </div>
                <div className="col-auto">
                  <label className="my-1 mr-2 text-capitalize">
                    {t.house_number_name}
                    <input
                      className="form-control ma-sm-1"
                      type="text"
                      name="house_name_number"
                    />
                  </label>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-auto">
                  <label className="my-1 mr-2 text-capitalize">
                    {t.lat}
                    <input
                      className="form-control mx-sm-1"
                      type="int"
                      name="lat"
                    />
                  </label>
                </div>
                <div className="col-auto">
                  <label className="my-1 mr-2 text-capitalize">
                    {t.lon}
                    <input
                      className="form-control mx-sm-1"
                      type="int"
                      name="lon"
                    />
                  </label>
                </div>
              </div>
              <div className="form-group row text-capitalize">
                <div className="col-auto">
                  <label>{t.species}</label>
                  <Select
                    name="species"
                    options={speciesOptions}
                    value={speciesOptions[0].value}
                  />
                </div>
                <div className="col-auto">
                  <label>{t.type}</label>
                  <Select
                    name="type"
                    options={constructionOptions}
                    value={constructionOptions[0].value}
                  />
                </div>
              </div>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          </div>
        )}
      </Formik>
    </Fragment>
  );
};

export default Form;
