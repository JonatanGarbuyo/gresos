import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import IconCheckCircle from "../icons/iconCheckCircle";
import IconCrossCircle from "../icons/iconCrossCircle";

const validationSchema = Yup.object().shape({
  date: Yup.date().required().label("Date"),
  concept: Yup.string().required().min(3).max(250).label("Concept"),
});

const allCategories = {
  expense: [
    { name: "food" },
    { name: "clothes" },
    { name: "other" },
    { name: "rent" },
  ],
  income: [{ name: "salary" }, { name: "gift" }],
};

export default function NewEntryForm({ entryType, setShowForm, ...props }) {
  return (
    <Formik
      initialValues={{ date: "", concept: "", category: "", amount: 0 }}
      validationSchema={validationSchema}
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
        isSubmitting,
        resetForm,
      }) => (
        <Form {...props}>
          {errors.password && touched.password && errors.password}

          <div className="cell">
            <Field className="form_input" type="date" name="date" />
          </div>
          <div className="cell">
            <Field className="form_input" type="text" name="concept" />
          </div>
          <div className="cell">
            <Field as="select" className="form_input" name="category">
              <option></option>
              {allCategories[entryType].map(({ name }) => (
                <option>{name}</option>
              ))}
            </Field>
          </div>
          <div className="cell">
            <Field
              className="form_input"
              type="text"
              name="type"
              value={entryType}
            />
          </div>
          <div className="cell">
            <Field className="form_input" type="number" name="amount" />
          </div>
          <div className="cell">
            <button
              type="submit"
              disabled={isSubmitting}
              className="form_input_button"
            >
              <IconCheckCircle height="100%" width="2rem" fill="green" />
            </button>

            <button
              type="reset"
              onClick={() => {
                resetForm();
                setShowForm(false);
              }}
              className="form_input_button"
            >
              <IconCrossCircle height="100%" width="2rem" fill="red" />
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
