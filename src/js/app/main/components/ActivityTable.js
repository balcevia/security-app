import React from 'react';
import TableComponent from "../../common/table/Table";

const ActivityTable = ({data}) => {
  const headers = [
    {
      title: "IP",
      key: "ipAddress"
    }, {
      title: "Last Login Time",
      key: "timestamp",
    }
  ];

  return (
    <TableComponent data={data} headers={headers}/>
  )
};

export default ActivityTable;