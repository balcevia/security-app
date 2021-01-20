import React from 'react';
import TableComponent from "../../common/table/Table";
import Button from "../../common/Button";

const FileTable = ({data, downloadFile}) => {

  const headers = [
    {
      title: "ID",
      key: "id"
    }, {
      title: "Owner",
      key: "owner"
    }, {
      title: "File Name",
      key: "fileName"
    }, {
      title: "Accessibility",
      key: "isPrivate",
      valueRenderer: (v) => v ? "Private" : "Public"
    }, {
      title: "Action",
      key: "id",
      textAlign: "center",
      valueRenderer: (v, row) => <Button title="Download" onClick={() => downloadFile(row)}/>
    }
  ];

  return (
    <TableComponent headers={headers} data={data}/>
  )
};

export default FileTable;