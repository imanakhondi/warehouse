import Table from "../../../components/ui/Table";

function ProductRow({ product, index }) {
  return (
    <Table.row>
      <td>{index + 1}</td>
      <td>{product.title}</td>
      <td>{product.quantity}</td>
      <td>{product.category}</td>
      <td>{product.date}</td>
      <td>...</td>
    </Table.row>
  );
}

export default ProductRow;
