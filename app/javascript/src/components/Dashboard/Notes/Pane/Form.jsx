import React, { useState } from "react";

import { Formik, Form } from "formik";
// @ts-ignore
import { Button, Pane } from "neetoui";
// @ts-ignore
import { Input, Textarea, Select } from "neetoui/formik";

import notesApi from "apis/notes";

import {
  NOTES_FORM_VALIDATION_SCHEMA,
  CONTACT_NAMES,
  TAGS,
} from "../constants";

const NoteForm = ({ onClose, refetch, note, isEdit }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async values => {
    try {
      if (isEdit) {
        await notesApi.update(note.id, values);
      } else {
        await notesApi.create(values);
      }
      refetch();
      onClose();
    } catch (err) {
      // @ts-ignore
      logger.error(err);
    }
  };
  return (
    <Formik
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={NOTES_FORM_VALIDATION_SCHEMA}
      initialValues={{
        title: note.title,
        description: note.description,
        contact: "",
        tag: "",
      }}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              required
              className="w-full flex-grow-0"
              label="Title"
              name="title"
            />
            <Textarea
              required
              className="w-full flex-grow-0"
              label="Description"
              name="description"
              rows={1}
            />
            <Select
              isClearable
              isSearchable
              required
              className="w-full flex-grow-0"
              label="Assigned Contact"
              name="contact"
              placeholder="Select Role"
              options={CONTACT_NAMES.map(contactName => ({
                label: contactName,
                value: contactName,
              }))}
            />
            <Select
              isClearable
              isSearchable
              required
              className="w-full flex-grow-0"
              label="Tag"
              name="tag"
              placeholder="Select Tag"
              options={TAGS.map(tag => ({
                value: tag,
                label: tag,
              }))}
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              disabled={isSubmitting}
              label={isEdit ? "Update" : "Save Changes"}
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

export default NoteForm;
