import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import IconCheckCircle from "../icons/iconCheckCircle";
import IconCrossCircle from "../icons/iconCrossCircle";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(3).max(24).label("Name"),
});

export default function NewCategoryForm({
  onSubmit,
  setShowForm,
  initialValues = { name: "" },
  formClassName,
}) {
  return (
    <Formik
      onSubmit={(values, { setSubmitting, resetForm }) => {
        onSubmit(values);
        resetForm();
        setShowForm(null);
        setSubmitting(false);
      }}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ values, isSubmitting, resetForm }) => (
        <Form className={formClassName}>
          <div className="cell form_cell">
            <Field className="form_input" type="text" name="name" />
            <ErrorMessage name="name" />
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
                setShowForm(null);
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
