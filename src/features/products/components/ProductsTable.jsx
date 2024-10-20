import React from "react";
import Table from "../../../components/ui/Table";
import ProductRow from "./ProductRow";

// const Products = [
//   {
//     id: 1,
//     title: "Product1",
//     number: 3,
//     category: "laptop",
//     date: "2024/05/26",
//   },
//   {
//     id: 2,
//     title: "Product2",
//     number: 5,
//     category: "laptop",
//     date: "2023/10/12",
//   },
//   {
//     id: 3,
//     title: "Product1",
//     number: 3,
//     category: "laptop",
//     date: "2024/05/26",
//   },
//   {
//     id: 4,
//     title: "Product2",
//     number: 5,
//     category: "laptop",
//     date: "2023/10/12",
//   },
//   {
//     id: 5,
//     title: "Product1",
//     number: 3,
//     category: "laptop",
//     date: "2024/05/26",
//   },
//   {
//     id: 6,
//     title: "Product2",
//     number: 5,
//     category: "laptop",
//     date: "2023/10/12",
//   },
//   {
//     id: 7,
//     title: "Product1",
//     number: 3,
//     category: "laptop",
//     date: "2024/05/26",
//   },
//   {
//     id: 8,
//     title: "Product2",
//     number: 5,
//     category: "laptop",
//     date: "2023/10/12",
//   },
//   {
//     id: 9,
//     title: "Product1",
//     number: 3,
//     category: "laptop",
//     date: "2024/05/26",
//   },
//   {
//     id: 10,
//     title: "Product2",
//     number: 5,
//     category: "laptop",
//     date: "2023/10/12",
//   },
// ];

function ProductsTable({products}) {
  return (
    <Table>
      <Table.header>
        <th>Row</th>
        <th>Title</th>
        <th>Number</th>
        <th>Category</th>
        <th>Date</th>
        <th>Operations</th>
      </Table.header>
      <Table.body>
        {products.map((product, index) => {
          return <ProductRow key={product.id} product={product} index={index} />;
        })}
      </Table.body>
    </Table>
  );
}

export default ProductsTable;
