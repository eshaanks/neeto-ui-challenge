import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  contact: null,
  tags: [],
};

export const CONTACT_NAMES = [
  {
    label: "Mike",
    value: "mike",
  },
  {
    label: "Saul",
    value: "saul",
  },
  {
    label: "Walter",
    value: "walter",
  },
];

export const TAGS = [
  {
    label: "Getting Started",
    value: "gettingStarted",
  },
  {
    label: "Onboarding",
    value: "onboarding",
  },
  {
    label: "User Flow",
    value: "userFlow",
  },
  {
    label: "UX",
    value: "ux",
  },
  {
    label: "Bugs",
    value: "bugs",
  },
];

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  contact: yup
    .object()
    .nullable()
    .shape({
      label: yup.string().oneOf(CONTACT_NAMES.map(name => name.label)),
      value: yup.string().oneOf(CONTACT_NAMES.map(name => name.value)),
    })
    .required("Contact is required"),
  tags: yup
    .array(
      yup
        .object()
        .nullable()
        .shape({
          label: yup.string().oneOf(TAGS.map(tag => tag.label)),
          value: yup.string().oneOf(TAGS.map(tag => tag.value)),
        })
    )
    .min(1, "Tag is required")
    .required("Tag is required"),
});

export const NOTES_TABLE_COLUMN_DATA = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "70%",
  },
];
