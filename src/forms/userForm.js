import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function UserForm({
  handleSubmit,
  fields = [],
  validationSchema,
  initialValues = {
    username: "",
    email: "",
    password: "",
  },
}) {
  return (
    <Formik
      onSubmit={(values, { setSubmitting, resetForm }) => {
        handleSubmit(values);
        resetForm();
        setSubmitting(false);
      }}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {({ values, isSubmitting, resetForm }) => (
        <Form className="user_form">
          {fields.map((field) => {
            return (
              <React.Fragment key={field.name}>
                <label className="user_form_label" htmlFor={field.name}>
                  {field.name}
                </label>
                <Field
                  className="user_form_input"
                  type={field.type}
                  name={field.name}
                />
                <p className="user_form_error">
                  <ErrorMessage name={field.name} />
                </p>
              </React.Fragment>
            );
          })}

          <Field
            as="button"
            type="submit"
            disabled={isSubmitting}
            className="user_form_input user_form_button user_form_submit"
          >
            Submit
          </Field>

          <Field
            as="button"
            type="reset"
            id="reset"
            onClick={() => {
              resetForm();
            }}
            className="user_form_input user_form_button user_form_cancel"
          >
            Cancel
          </Field>
        </Form>
      )}
    </Formik>
  );
}
