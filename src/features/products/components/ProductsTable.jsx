import React from "react";
import Table from "../../../components/ui/Table";
import ProductRow from "./ProductRow";
import { useAppContext } from "../../../context/AppContext";

function ProductsTable() {
  const {
    state: { filteredProductsState },
  } = useAppContext();

  if (filteredProductsState.filteredProducts.length === 0)
    return (
      <p className="w-full text-secondary-800 my-5 text-xl font-bold">
        There is no product
      </p>
    );

  return (
    <Table>
      <Table.header>
        <th>Row</th>
        <th>Title</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Category</th>
        <th>Date</th>
        <th>Operations</th>
      </Table.header>
      <Table.body>
        {filteredProductsState.filteredProducts.length !== 0 &&
          filteredProductsState.filteredProducts?.map((product, index) => {
            return (
              <ProductRow key={product.id} product={product} index={index} />
            );
          })}
      </Table.body>
    </Table>
  );
}

export default ProductsTable;
