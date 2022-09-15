import * as yup from "yup";

export const ROLES = [
  "UX designer",
  "Tester",
  "Analyst",
  "Back-end developer",
  "Front-end developer",
];

export const CONTACT_FORM_INITIAL_FORM_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: null,
};

export const CONTACT_FORM_VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  role: yup
    .object()
    .nullable()
    .shape({
      label: yup.string().oneOf(ROLES),
      value: yup.string().oneOf(ROLES),
    })
    .required("Role is required"),
});
