import { Formik, Form, Field, ErrorMessage } from "formik";
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
  ...props
}) {
  const categoryOptions = allCategories
    .filter((category) => category)
    .map((category) => <option>{category}</option>);

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
      {({ values, errors, touched, isSubmitting, resetForm }) => (
        <Form {...props}>
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
              {categoryOptions}
            </Field>
          </div>
          <div className="cell form_cell">
            <Field
              className="form_input"
              type="text"
              name="type"
              value={entryType}
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
