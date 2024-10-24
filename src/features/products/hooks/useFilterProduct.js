import { useAppContext } from "../../../context/AppContext";
import { filteredProductActions } from "../../../context/AppActions";
import useFormWithValidation from "../../../hooks/useFormWithValidation";
import filterProductSchema from "../validations/filterProductSchema";

function useFilterProducts(onClose) {
  const {
    state: { categoriesState },
    dispatch,
  } = useAppContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormWithValidation(filterProductSchema());

  const handleFilterSubmit = ({ title, category, sortOrder }) => {
    dispatch({
      type: filteredProductActions.FILTER_PRODUCT,
      payload: { title, category, sortOrder },
    });
    onClose();
  };

  return {
    register,
    handleSubmit,
    handleFilterSubmit,
    errors,
    categoriesState,
  };
}

export default useFilterProducts;
