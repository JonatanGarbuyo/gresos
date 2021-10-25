import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import IconCheckCircle from "../icons/iconCheckCircle";
import IconCrossCircle from "../icons/iconCrossCircle";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(3).max(24).label("Name"),
});

export default function NewCategoryForm({
  setShowForm,
  inputClassName,
  ...props
}) {
  return (
    <Formik
      initialValues={{ name: "" }}
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
            <Field className="form_input" type="text" name="name" />
            {errors.name && touched.name && errors.name}
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
