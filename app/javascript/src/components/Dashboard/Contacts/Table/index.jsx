import React from "react";

import { Table as NeetoUITable } from "neetoui";

import { getColumnData } from "./ColumnDefinition";

import { ROW_DATA } from "../constants";

const Table = ({ setShowDeleteAlert }) => (
  <NeetoUITable
    className="text-gray-500"
    columnData={getColumnData(setShowDeleteAlert)}
    currentPageNumber={1}
    defaultPageSize={10}
    rowData={ROW_DATA}
  />
);

export default Table;
