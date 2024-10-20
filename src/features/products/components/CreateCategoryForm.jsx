import { useForm } from "react-hook-form";
import TextareaField from "../../../components/form/TextareaField";
import TextField from "../../../components/form/TextField";
import Button from "../../../components/form/Button";

function CreateCategoryForm({ categories, setCategories }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (formData) => {
    const newData = {
      id: Date.now(),
      title: formData.title,
      description: formData.description,
    };
    setCategories([...categories, newData]);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
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
