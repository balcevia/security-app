import React from 'react';
import FileTable from "./FileTable";
import './Main.scss';

const FileList = ({data, downloadFile}) => (
  <div className="main-view-container">
    <FileTable data={data} downloadFile={downloadFile}/>
  </div>
);

export default FileList;