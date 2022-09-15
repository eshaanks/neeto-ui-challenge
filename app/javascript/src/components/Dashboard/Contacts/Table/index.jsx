import React from "react";

import { Table as NeetoUITable } from "neetoui";

import { COLUMN_DATA, ROW_DATA } from "../constants";

const Table = () => (
  <NeetoUITable
    className="text-gray-500"
    columnData={COLUMN_DATA}
    currentPageNumber={1}
    defaultPageSize={10}
    rowData={ROW_DATA}
  />
);

export default Table;
