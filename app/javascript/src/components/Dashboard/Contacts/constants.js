import { buildSelectOptions } from "utils";
import * as yup from "yup";

import { convertDateToStdFormat } from "./utils";

const DUMMY_CONTACT_DATA = {
  name: "Ronald Reagan",
  email: "ronald@gmail.com",
  createdAt: convertDateToStdFormat(new Date()),
};

export const ROW_DATA = Array(100).fill(DUMMY_CONTACT_DATA);

export const ROLES = buildSelectOptions([
  "UX designer",
  "Tester",
  "Analyst",
  "Back-end developer",
  "Front-end developer",
]);

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
      label: yup.string().oneOf(ROLES.map(role => role.label)),
      value: yup.string().oneOf(ROLES.map(role => role.value)),
    })
    .required("Role is required"),
});
