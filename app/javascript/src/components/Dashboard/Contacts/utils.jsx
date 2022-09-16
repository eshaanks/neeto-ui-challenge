import React from "react";

import dayjs from "dayjs";
import { MenuHorizontal } from "neetoicons";
import { Dropdown } from "neetoui";

import Avatar from "./Table/Avatar";

export const convertDateToStdFormat = date =>
  dayjs(date).format("MMM, d, YYYY");

export const getColumnDefintion = setShowDeleteAlert => [
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
    render: () => (
      <Dropdown buttonStyle="text" icon={MenuHorizontal} strategy="fixed">
        <li>Edit</li>
        <li onClick={setShowDeleteAlert}>Delete</li>
      </Dropdown>
    ),
  },
];
