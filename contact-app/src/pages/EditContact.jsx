import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function EditContact({ updateContactHandler }) {
  const location = useLocation();
  const navigate = useNavigate();

  // Get contact data from location state
  const { contact } = location.state || {};

  const validationSchema = Yup.object({
    name: Yup.string()
      .transform((value) => (typeof value === "string" ? value.trim() : value))
      .required("Name is required")
      .min(3, "Name must be at least 3 characters")
      .test(
        "not-only-spaces",
        "Name cannot contain only spaces",
        (value) => value && value.trim().length > 0
      ),

    email: Yup.string()
      .transform((value) => (typeof value === "string" ? value.trim() : value))
      .required("Email is required")
      .email("Invalid email format")
      .test(
        "no-spaces",
        "Email must not contain spaces",
        (value) => !/\s/.test(value || "")
      )
      .test("no-uppercase", "Email must be lowercase", (value) =>
        value ? value === value.toLowerCase() : true
      ),
  });

  return (
    <div className="ui main " style={{ marginTop: "100px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "30px",
        }}
      >
        <h2 className="ui center aligned header" style={{ marginLeft: "20px" }}>
          Edit Contact
        </h2>
        <Link to="/">
          <button
            className="ui button blue right"
            style={{
              marginLeft: "auto",
              marginRight: "20px",
              width: "fit-content",
              height: "fit-content",
              padding: "10px 20px",
            }}
          >
            Home
          </button>
        </Link>
      </div>
      <Formik
        initialValues={{
          name: contact?.name || "",
          email: contact?.email || "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          const sanitized = {
            id: contact.id,
            name: values.name.trim(),
            email: values.email.trim().toLowerCase(),
          };
          updateContactHandler(sanitized);
          navigate("/");
        }}
      >
        {() => (
          <Form className="ui form container">
            <div className="field">
              <label>Name</label>
              <Field type="text" name="name" placeholder="Name" />
              <div style={{ color: "red" }}>
                <ErrorMessage name="name" />
              </div>
            </div>
            <div className="field">
              <label>Email</label>
              <Field type="text" name="email" placeholder="Email" />
              <div style={{ color: "red" }}>
                <ErrorMessage name="email" />
              </div>
            </div>
            <div className="ui center aligned header">
              <button type="submit" className="ui button blue">
                Update
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
