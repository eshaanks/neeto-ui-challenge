import React, { useState } from "react";

import { Formik, Form } from "formik";
// @ts-ignore
import { Pane, Button, Toastr } from "neetoui";
// @ts-ignore
import { Input, Select } from "neetoui/formik";

import {
  CONTACT_FORM_VALIDATION_SCHEMA,
  CONTACT_FORM_INITIAL_FORM_VALUES,
  ROLES,
} from "../constants";

const ContactForm = ({ onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    onClose();
    Toastr.success("Contact added successfully.");
  };

  return (
    <Formik
      initialValues={CONTACT_FORM_INITIAL_FORM_VALUES}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={CONTACT_FORM_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Pane.Body className="space-y-6">
            <div className="flex w-full justify-between">
              <Input
                required
                className="mr-6"
                label="First Name"
                name="firstName"
                placeholder="Enter first name"
              />
              <Input
                required
                label="Last Name"
                name="lastName"
                placeholder="Enter last name"
              />
            </div>
            <Input
              required
              className="w-full flex-grow-0"
              label="Email"
              name="email"
              placeholder="Enter your email address"
              type="email"
            />
            <Select
              isClearable
              isSearchable
              required
              className="w-full flex-grow-0"
              label="Role"
              name="role"
              placeholder="Select Role"
              options={ROLES.map(role => ({
                label: role,
                value: role,
              }))}
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              disabled={isSubmitting}
              label="Save Changes"
              loading={isSubmitting}
              size="large"
              style="primary"
              type="submit"
              onClick={() => setSubmitted(true)}
            />
            <Button
              label="Cancel"
              size="large"
              style="text"
              onClick={onClose}
            />
          </Pane.Footer>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;