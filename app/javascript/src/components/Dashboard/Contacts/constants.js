import React from "react";

import * as yup from "yup";

import Avatar from "./Table/Avatar";
import RowActions from "./Table/RowActions";
import { convertDateToStdFormat } from "./utils";

const DUMMY_CONTACT_DATA = {
  name: "Ronald Reagan",
  email: "ronald@gmail.com",
  createdAt: convertDateToStdFormat(new Date()),
};

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

export const ROW_DATA = Array(100).fill(DUMMY_CONTACT_DATA);

export const COLUMN_DATA = [
  {
    title: "NAME & ROLE",
    dataIndex: "name",
    key: "name",
    width: "33%",
    // eslint-disable-next-line react/jsx-filename-extension
    render: name => <Avatar name={name} />,
  },
  {
    title: "EMAIL",
    dataIndex: "email",
    key: "email",
    width: "28%",
  },
  {
    title: "CREATED AT",
    dataIndex: "createdAt",
    key: "createdAt",
    width: "25%",
  },
  {
    title: "",
    dataIndex: "icon_button",
    key: "icon_button",
    width: "20%",
    render: () => <RowActions />,
  },
];
