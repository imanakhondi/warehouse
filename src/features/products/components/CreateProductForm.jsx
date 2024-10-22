import { useForm } from "react-hook-form";
import TextField from "../../../components/form/TextField";
import Button from "../../../components/form/Button";
import RHFSelect from "../../../components/form/RHFSelect";
import { useAppContext } from "../../../context/AppContext";
import { productActions } from "../../../context/AppActions";
import toast from "react-hot-toast";

function CreateProductForm() {
  const {
    state: { categoriesState },
    dispatch,
  } = useAppContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleProductSubmission = ({ title, quantity, category }) => {
    const newProduct = {
      id: Date.now(),
      title,
      quantity,
      category,
      date: new Date().toLocaleDateString("en-CA").replace(/-/g, "/"),
    };
    dispatch({ type: productActions.ADD_PRODUCT, payload: newProduct });
    reset();
    toast.success(`${title} product successfully created`);
  };

  return (
    <form
      onSubmit={handleSubmit(handleProductSubmission)}
      className="space-y-8"
    >
      <TextField
        label="title"
        name="title"
        register={register}
        errors={errors}
        validationSchema={{
          required: "title is required",
          minLength: {
            value: 3,
            message: "Invalid title length",
          },
        }}
        required
      />
      <TextField
        label="quantity"
        name="quantity"
        register={register}
        errors={errors}
        validationSchema={{
          required: "quantity is required",
        }}
        required
      />
      <RHFSelect
        label="category"
        name="category"
        options={categoriesState.categories}
        register={register}
        required
        errors={errors}
        validationSchema={{ required: "Category is required" }}
      />
      <Button className="w-full"> Submit</Button>
    </form>
  );
}

export default CreateProductForm;
