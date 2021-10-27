import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import IconCheckCircle from "../icons/iconCheckCircle";
import IconCrossCircle from "../icons/iconCrossCircle";

const validationSchema = Yup.object({
  date: Yup.date().required().label("Date"),
  concept: Yup.string().min(3).required().max(64).label("Concept"),
  category: Yup.string().max(24).label("Category"),
  type: Yup.string().required().max(8).label("Type"),
  amount: Yup.number().required().label("Amount"),
});

export default function NewEntryForm({
  transactionType,
  setShowForm,
  categories,
  addTransaction,
  formClassName,
}) {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        date: "",
        concept: "",
        category: "",
        type: `${transactionType}`,
        amount: "",
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        addTransaction(values);
        setShowForm(false);
        resetForm();
        setSubmitting(false);
      }}
    >
      {({ values, errors, touched, isSubmitting, resetForm }) => (
        <Form className={formClassName}>
          <div className="cell form_cell">
            <Field className="form_input" type="date" name="date" />
            <ErrorMessage name="date" />
          </div>

          <div className="cell form_cell">
            <Field className="form_input" type="text" name="concept" />
            <ErrorMessage name="concept" />
          </div>

          <div className="cell form_cell">
            <Field as="select" className="form_input" name="category">
              <option></option>
              {categories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </Field>
            <ErrorMessage name="category" />
          </div>

          <div className="cell form_cell">
            <Field
              className="form_input"
              type="text"
              name="type"
              disabled={true}
            />
            <ErrorMessage name="type" />
          </div>

          <div className="cell form_cell">
            <Field
              className="form_input"
              type="number"
              name="amount"
              placeholder="0"
            />
            <ErrorMessage name="amount" />
          </div>

          <div className="cell form_cell">
            <Field
              as="button"
              type="submit"
              disabled={isSubmitting}
              className="form_input_button"
            >
              <IconCheckCircle height="100%" width="2rem" fill="green" />
            </Field>

            <Field
              as="button"
              type="reset"
              id="reset"
              onClick={() => {
                resetForm();
                setShowForm(false);
              }}
              className="form_input_button"
            >
              <IconCrossCircle height="100%" width="2rem" fill="red" />
            </Field>
          </div>
        </Form>
      )}
    </Formik>
  );
}
