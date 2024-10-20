import { useForm } from "react-hook-form";
import TextField from "../../../components/form/TextField";
import Button from "../../../components/form/Button";
import RHFSelect from "../../../components/form/RHFSelect";

const categoryOption = [
  {
    value: "1",
    label: "Laptop",
  },
  {
    value: "2",
    label: "mobile",
  },
  {
    value: "3",
    label: "TV",
  },
];

function CreateProductForm({ products, setProducts, categories }) {
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
      quantity: formData.quantity,
      category: formData.category,
      date: new Date().toLocaleDateString("fa-IR"),
    };
    setProducts([...products, newData]);
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
        options={categories}
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
