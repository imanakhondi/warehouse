import { HiEye, HiOutlineTrash } from "react-icons/hi";
import Modal from "../../../components/modal/Modal";
import ConfirmDelete from "../../../components/ui/ConfirmDelete";
import Table from "../../../components/ui/Table";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../../context/AppContext";
import { productActions } from "../../../context/AppActions";

function ProductRow({ product, index }) {
  const [isRemoveOpen, setIsRemoveOpen] = useState(false);
  const { dispatch } = useAppContext();

  return (
    <Table.row>
      <td>{index + 1}</td>
      <td>{product.title}</td>
      <td>{product.quantity}</td>
      <td>{product.price}</td>
      <td>{product.category}</td>
      <td>{product.date}</td>
      <td>
        <div className="flex items-center gap-x-2">
          <button onClick={() => setIsRemoveOpen(true)}>
            <HiOutlineTrash className="w-5 h-5 text-secondary-error" />
          </button>
          <Modal
            open={isRemoveOpen}
            title={`delete ${product.title}`}
            onClose={() => setIsRemoveOpen(false)}
          >
            <ConfirmDelete
              resourceName={product.title}
              onClose={() => setIsRemoveOpen(false)}
              disabled={false}
              onConfirm={() => {
                dispatch({
                  type: productActions.DELETE_PRODUCT,
                  payload: product.id,
                });
              }}
            />
          </Modal>
          <Link to={`products/${product.id}`} className="flex justify-center">
            <HiEye className="w-5 h-5 text-primary-900" />
          </Link>
        </div>
      </td>
    </Table.row>
  );
}

export default ProductRow;
