import React from "react";

import Avatar from "./Avatar";
import RowActions from "./RowActions";

import { convertDateToStdFormat } from "../utils";

const DUMMY_CONTACT_DATA = {
  name: "Ronald Reagan",
  email: "ronald@gmail.com",
  createdAt: convertDateToStdFormat(new Date()),
};
export const ROW_DATA = Array(100).fill(DUMMY_CONTACT_DATA);

export const COLUMN_DATA = [
  {
    title: "NAME & ROLE",
    dataIndex: "name",
    key: "name",
    width: "33%",
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
