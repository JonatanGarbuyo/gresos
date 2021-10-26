import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import IconCheckCircle from "../icons/iconCheckCircle";
import IconCrossCircle from "../icons/iconCrossCircle";

const validationSchema = Yup.object().shape({
  date: Yup.date().required().label("Date"),
  concept: Yup.string().required().max(64).label("Concept"),
  category: Yup.string().max(24).label("Category"),
  type: Yup.string().required().max(8).label("Type"),
  amount: Yup.number().required().label("Amount"),
});

export default function NewEntryForm({
  entryType,
  setShowForm,
  allCategories,
  addTransaction,
  className,
  initialValues = {},
}) {
  return (
    <Formik validationSchema={validationSchema}>
      {({ values, errors, touched, isSubmitting, resetForm }) => (
        <Form className={className}>
          <div className="cell form_cell">
            <Field className="form_input" type="date" name="date" />
            {errors.date && touched.date && errors.date}
          </div>

          <div className="cell form_cell">
            <Field className="form_input" type="text" name="concept" />
            {errors.concept && touched.concept && errors.concept}
          </div>

          <div className="cell form_cell">
            <Field as="select" className="form_input" name="category">
              <option></option>
              {allCategories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </Field>
          </div>

          <div className="cell form_cell">
            <Field
              className="form_input"
              type="text"
              name="type"
              value={entryType}
              disabled={true}
            />
          </div>

          <div className="cell form_cell">
            <Field className="form_input" type="number" name="amount" />
            {errors.amount && touched.amount && errors.amount}
          </div>

          <div className="cell form_cell">
            <button
              type="submit"
              disabled={isSubmitting}
              className="form_input_button"
              onClick={() => {
                addTransaction(values);
                resetForm();
                setShowForm(false);
              }}
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
