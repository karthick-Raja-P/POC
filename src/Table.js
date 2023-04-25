import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const Table = () => {
  const data = [
    {
      id: 1,
      name: "Raja",
      age: "22",
      email: "raja123@gmail.com",
      mobile: "9875264881",
    },
    {
      id: 2,
      name: "Kavi",
      age: "26",
      email: "kavi123@gmail.com",
      mobile: "9875264385",
    },
    {
      id: 3,
      name: "Ragul",
      age: "28",
      email: "ragul123@gmail.com",
      mobile: "9875264856",
    },
    {
      id: 4,
      name: "Vel",
      age: "24",
      email: "vel123@gmail.com",
      mobile: "9875464886",
    },
    {
      id: 5,
      name: "Vignesh",
      age: "28",
      email: "vignesh123@gmail.com",
      mobile: "9875264871",
    },
  ];
  const columns = [
    { headerName: "ID", field: "id" },
    {
      headerName: "Name",
      field: "name",
    },
    {
      headerName: "Age",
      field: "age",
    },
    {
      headerName: "Email",
      field: "email",
    },
    {
      headerName: "Mobile",
      field: "mobile",
    },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 300, width: 1050 }}>
      <AgGridReact rowData={data} columnDefs={columns} />
    </div>
  );
};

export default Table;
