import React, { Fragment } from "react";
import { useFormik } from "formik";
import Select from "react-select";
import * as Yup from "yup";
const t = require("../translations/translate_es.json");

const validationSchema = Yup.object().shape({
  street: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  house_number_name: Yup.string()
    .max(20, "Too Long!")
    .required("Required"),
  lat: Yup.string().required("Required"),
  lon: Yup.string().required("Required")
});

const constructions = ["window", "cornice", "crack", "cables", "gable"];
const constructionOptions = constructions.map(construction => {
  return { value: construction, label: t[construction] };
});

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

const validationError = field => (
  <div>
    <small className="text-danger">{field}</small>
  </div>
);

const Form = props => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  } = useFormik({
    initialValues: { email: "", password: "", street: "" },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }
  });

  return (
    <Fragment>
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
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="col-sm-4">
              <label>{t.type}</label>
              <Select
                name="type"
                options={constructionOptions}
                defaultValue={constructionOptions[0].label}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>
          <div className="form-group row text-capitalize">
            <div className="col-sm-4">
              <label>{t.height}</label>
              <Select
                name="height"
                options={heightOptions}
                defaultValue={heightOptions[0].value}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="col-sm-4">
              <label>{t.facing}</label>
              <Select
                name="facing"
                options={facingOptions}
                defaultValue={facingOptions[0].value}
                onChange={handleChange}
                onBlur={handleBlur}
              />
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
                    defaultValue={1}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </label>
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
                  name={t.destroyed}
                  options={[
                    { value: t["true"], label: t["true"] },
                    { value: t["false"], label: t["false"] }
                  ]}
                  defaultValue={t.false}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <label className="text-capitalize">
                {t.destroyed_date}
                <input type="date" name="destroyed_date" />
              </label>
            </div>
          </div>
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
    </Fragment>
  );
};

export default Form;
