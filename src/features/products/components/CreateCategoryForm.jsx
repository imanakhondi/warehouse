import TextareaField from "../../../components/form/TextareaField";
import TextField from "../../../components/form/TextField";
import Button from "../../../components/form/Button";
import useCreateCategory from "../hooks/useCreateCategory";

function CreateCategoryForm() {
  const category = useCreateCategory();

  return (
    <form
      onSubmit={category.handleSubmit(category.handleCategorySubmission)}
      className="space-y-8"
    >
      <TextField
        label="title"
        name="title"
        register={category.register}
        errors={category.errors}
      />
      <TextareaField
        lable="description"
        name="description"
        register={category.register}
        errors={category.errors}
      />
      <Button className="w-full"> Submit</Button>
    </form>
  );
}

export default CreateCategoryForm;
