import React from "react";

function Table({ children }) {
  return (
    <div>
      <table>{children}</table>
    </div>
  );
}

export default Table;

function TableHeader({ children }) {
  return (
    <thead>
      <tr className="">{children}</tr>
    </thead>
  );
}

function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}

function TableRow({ children }) {
  return <tr>{children}</tr>;
}

Table.header = TableHeader;
Table.body = TableBody;
Table.row = TableRow;
