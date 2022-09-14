import React from "react";

import { MenuHorizontal } from "@bigbinary/neeto-icons";
// @ts-ignore
import { Dropdown } from "neetoui";

const RowActions = () => (
  <Dropdown buttonStyle="text" icon={MenuHorizontal} strategy="fixed">
    <li>Edit</li>
    <li>Delete</li>
  </Dropdown>
);

export default RowActions;