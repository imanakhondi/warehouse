import { useAppContext } from "../../../context/AppContext";
import toast from "react-hot-toast";
import { productActions } from "../../../context/AppActions";
import createProductSchema from "../validations/createProductSchema";
import useFormWithValidation from "../../../hooks/useFormWithValidation";

function useCreateProduct() {
  const {
    state: { categoriesState },
    dispatch,
  } = useAppContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useFormWithValidation(createProductSchema(categoriesState));

  const handleProductSubmission = ({ title, quantity, price, category }) => {
    const newProduct = {
      id: Date.now(),
      slug: title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, ""),
      title,
      quantity,
      price,
      category,
      date: new Date().toLocaleDateString("en-CA").replace(/-/g, "/"),
    };
    dispatch({ type: productActions.ADD_PRODUCT, payload: newProduct });
    reset();
    toast.success(`${title} product successfully created`);
  };

  return {
    categoriesState,
    register,
    handleSubmit,
    handleProductSubmission,
    errors,
  };
}

export default useCreateProduct;
