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

  const height = [...Array(20).keys()];

  const heightOptions = height.map(h => {
    return { value: h, label: h };
  });

  const facing = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const facingOptions = facing.map(aspect => {
    return { value: aspect, label: t[aspect] };
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
                <div className="col-sm-4">
                  <label>{t.species}</label>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    name="species"
                    options={speciesOptions}
                    value={speciesOptions[0].value}
                  />
                </div>
                <div className="col-sm-4">
                  <label>{t.type}</label>
                  <Select
                    name="type"
                    options={constructionOptions}
                    value={constructionOptions[0].value}
                  />
                </div>
              </div>
              <div className="form-group row text-capitalize">
                <div className="col-sm-4">
                  <label>{t.height}</label>
                  <Select
                    name="height"
                    options={heightOptions}
                    value={heightOptions[0].value}
                  />
                </div>
                <div className="col-sm-4">
                  <label>{t.facing}</label>
                  <Select
                    name="facing"
                    options={facingOptions}
                    value={facingOptions[0].value}
                  />
                </div>
              </div>
              <div>
                <label className="text-capitalize">
                  {t.date}
                  <input type="date" name="date" />
                </label>
              </div>
              <div className="card">
                <div
                  className="card-body"
                  style={{ backgroundColor: "#f5faff" }}
                >
                  <div className="card-subtitle mb-2 text-muted">
                    {" "}
                    "Cada nido crea una entrada en la base de datos. "
                  </div>
                  <div className="card-subtitle mb-2 text-muted">
                    {" "}
                    "En el caso de múltiples nidos con las mismas
                    especificaciones se actualiza este valor:"
                  </div>
                  <div className="col-auto">
                    <label className="text-capitalize">
                      {t.qty}
                      <input
                        className="form-control ms-mx-1"
                        type="int"
                        name="qty"
                        value={1}
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="card">
                <div
                  className="card-body"
                  style={{ backgroundColor: "#e3f2fd" }}
                >
                  <div className="card-subtitle mb-2 text-muted">
                    Si el nido ya no está allí, rellene lo siguiente e incluya
                    el día registrado:
                  </div>
                  <div>
                    <label className="text-capitalize">{t.destroyed}</label>
                    <Select
                      name={t.destroyed}
                      options={[
                        { value: t[true], label: t[true] },
                        { value: t[false], label: t[false] }
                      ]}
                      value={t.false}
                    />
                  </div>
                  <label className="text-capitalize">
                    {t.destroyed_date}
                    <input type="date" name="destroyed_date" />
                  </label>
                </div>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </div>
              {errors.email && touched.email && errors.email}
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <button
                type="submit"
                className="btn btn-primary mb-2 text-capitalize"
                value={t.submit}
                disabled={isSubmitting}
              >
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
