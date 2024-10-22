import { useForm } from "react-hook-form";
import TextareaField from "../../../components/form/TextareaField";
import TextField from "../../../components/form/TextField";
import Button from "../../../components/form/Button";
import { useAppContext } from "../../../context/AppContext";
import { categoryActions } from "../../../context/AppActions";
import toast from "react-hot-toast";

function CreateCategoryForm() {
  const { dispatch } = useAppContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

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

  return (
    <form
      onSubmit={handleSubmit(handleCategorySubmission)}
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
      <TextareaField
        lable="description"
        name="description"
        register={register}
        errors={errors}
      />
      <Button className="w-full"> Submit</Button>
    </form>
  );
}

export default CreateCategoryForm;
