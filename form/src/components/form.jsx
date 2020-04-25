import React, { useRef, Fragment } from "react";
import { useFormik } from "formik";
import Select from "react-select";
import * as Yup from "yup";
import { postFormUrl, postDataToApi } from "../api.jsx";
const t = require("../translations/translate_es.json");

const validationSchema = Yup.object().shape({
  street: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  house_number_name: Yup.string()
    .max(20, "Too Long!")
    .required("Required"),
  species: Yup.object().shape({
    label: Yup.string().required("hey... this is required")
  }),
  lat: Yup.string()
    .matches(/[0-9]+\./, "only a valid coordinate")
    .required("Required"),
  lon: Yup.string()
    .matches(/[0-9]+\./, "only a valid coordinate")
    .required("Required"),
  date: Yup.date().required("Required"),
  qty: Yup.string().required("Required"),
  destroyed: Yup.string().required("Required"),
  destroyed_date: Yup.date().when("destroyed", {
    is: t[true],
    then: Yup.date().required("date is required")
  })
});

const constructions = ["window", "cornice", "crack", "cables", "gable"];
const constructionOptions = constructions.map(construction => {
  return { value: t[construction], label: t[construction] };
});

const birds = [
  "swallow",
  "swift",
  "martin",
  "pallid_swift",
  "red_rumped_swallow"
];
const speciesOptions = birds.map(bird => {
  return { value: t[bird], label: t[bird] };
});

const height = [...Array(20).keys()];

const heightOptions = height.map(h => {
  return { value: h, label: h };
});

const facing = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
const facingOptions = facing.map(aspect => {
  return { value: t[aspect], label: t[aspect] };
});

const validationError = field => (
  <div>
    <small className="text-danger">{field}</small>
  </div>
);

const Form = props => {
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
    initialValues: { qty: "1", destroyed: { label: t.false, value: t.false } },
    validationSchema
    // handleSubmit: htmlSubmit
    // onSubmit: async (values, { setSubmitting }) => {
    //   await postDataToApi(postFormUrl, values);
    //   setSubmitting(false);
    // }
  });

  return (
    <Fragment>
      <div className="card">
        <form method="POST" ref={formEl} action="/form" onSubmit={htmlSubmit}>
          <input type="hidden" name="language" value="spanish" />
          <div className="form-group row">
            <div className="col-auto">
              <label className="my-1 mr-2 text-capitalize">
                {t.street}
                <input
                  className="form-control mx-sm-1"
                  type="text"
                  name="street"
                  value={values.street}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </label>
              {errors.street &&
                touched.street &&
                validationError(errors.street)}
            </div>
            <div className="col-auto">
              <label className="my-1 mr-2 text-capitalize">
                {t.house_number_name}
                <input
                  className="form-control ma-sm-1"
                  type="text"
                  name="house_number_name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </label>
              {errors.house_number_name &&
                touched.house_number_name &&
                validationError(errors.house_number_name)}
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
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </label>
              {errors.lat && touched.lat && validationError(errors.lat)}
            </div>
            <div className="col-auto">
              <label className="my-1 mr-2 text-capitalize">
                {t.lon}
                <input
                  className="form-control mx-sm-1"
                  type="int"
                  name="lon"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </label>
              {errors.lon && touched.lon && validationError(errors.lon)}
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
                defaultValue={speciesOptions[0].label}
                onChange={item => setFieldValue("species", item)}
                value={values.species}
                onBlur={() => setFieldTouched("species", true)}
              />
              {errors.species &&
                touched.species &&
                validationError(errors.species.label)}
            </div>
            <div className="col-sm-4">
              <label>{t.type}</label>
              <Select
                name="type-of"
                options={constructionOptions}
                defaultValue={constructionOptions[0].label}
                onChange={setFieldValue}
                onBlur={handleBlur}
              />
              {errors.type &&
                touched.type &&
                validationError(errors.type.label)}
            </div>
          </div>
          <div className="form-group row text-capitalize">
            <div className="col-sm-4">
              <label>{t.height}</label>
              <Select
                name="height"
                options={heightOptions}
                defaultValue={heightOptions[0].value}
                onChange={setFieldValue}
                onBlur={handleBlur}
              />
              {errors.height &&
                touched.height &&
                validationError(errors.height.label)}
            </div>
            <div className="col-sm-4">
              <label>{t.facing}</label>
              <Select
                name="facing"
                options={facingOptions}
                defaultValue={facingOptions[0].value}
                onChange={setFieldValue}
                onBlur={handleBlur}
              />
              {errors.facing &&
                touched.facing &&
                validationError(errors.facing.label)}
            </div>
          </div>
          <div>
            <label className="text-capitalize">
              {t.date}
              <input
                type="date"
                name="date"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
            {errors.date && touched.date && validationError(errors.date.label)}
          </div>
          <div className="card">
            <div className="card-body" style={{ backgroundColor: "#f5faff" }}>
              <div className="card-subtitle mb-2 text-muted">
                {" "}
                "Cada nido crea una entrada en la base de datos. "
              </div>
              <div className="card-subtitle mb-2 text-muted">
                {" "}
                "En el caso de múltiples nidos con las mismas especificaciones
                se actualiza este valor:"
              </div>
              <div className="col-auto">
                <label className="text-capitalize">
                  {t.qty}
                  <input
                    className="form-control ms-mx-1"
                    type="int"
                    name="qty"
                    value={values.qty}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </label>
                {errors.qty && touched.qty && validationError(errors.qty)}
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body" style={{ backgroundColor: "#e3f2fd" }}>
              <div className="card-subtitle mb-2 text-muted">
                Si el nido ya no está allí, rellene lo siguiente e incluya el
                día registrado:
              </div>
              <div>
                <label className="text-capitalize">{t.destroyed}</label>
                <Select
                  name="destroyed"
                  defaultValue={{ value: t.false, label: t.false }}
                  options={[
                    { value: t.true, label: t.true },
                    { value: t.false, label: t.false }
                  ]}
                  onChange={value => {
                    setFieldValue("destroyed", value);
                  }}
                  onBlur={() => {
                    /* handleBlur(); */
                    console.log(values.destroyed.label);
                  }}
                />
                {errors.date && touched.date && validationError(errors.date)}
              </div>
              <div
                className={
                  values.destroyed.label === t.false ? "invisible" : ""
                }
              >
                <label className="text-capitalize">
                  {t.destroyed_date}
                  <input type="date" name="destroyed_date" />
                </label>
                {errors.destroyed_date &&
                  touched.destroyed_date &&
                  validationError(errors.destroyed_date)}
              </div>
            </div>
          </div>
          <button
            /* type="submit" */
            className="btn btn-primary mb-2 text-capitalize"
            value={t.submit}
            disabled={isSubmitting || Object.keys(errors).length > 0}
            onClick={() => console.log(errors)}
            /* onClick={() => postDataToApi(window.location.href, values)} */
          >
            Submit
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Form;
