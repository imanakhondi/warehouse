import { categoryActions } from "../../../context/AppActions";
import { useAppContext } from "../../../context/AppContext";
import toast from "react-hot-toast";
import createCategorySchema from "../validations/createCategorySchema";
import useFormWithValidation from "../../../hooks/useFormWithValidation";

function useCreateCategory() {
  const { dispatch } = useAppContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useFormWithValidation(createCategorySchema());

  const handleCategorySubmission = ({ title, description }) => {
    const newCategory = {
      id: Date.now(),
      title,
      description,
    };
    dispatch({ type: categoryActions.ADD_CATEGORY, payload: newCategory });
    reset();
    toast.success(`${title} category successfully created`);
  };
  return {
    register,
    handleSubmit,
    handleCategorySubmission,
    errors,
  };
}

export default useCreateCategory;
