import React from "react";

import { Table as NeetoUITable } from "neetoui";

import { ROW_DATA } from "../constants";
import { getColumnDefintions } from "../utils";

const Table = ({ setShowDeleteAlert }) => (
  <NeetoUITable
    className="text-gray-500"
    columnData={getColumnDefintions(setShowDeleteAlert)}
    currentPageNumber={1}
    defaultPageSize={10}
    rowData={ROW_DATA}
  />
);

export default Table;
