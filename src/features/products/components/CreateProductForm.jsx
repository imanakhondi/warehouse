import TextField from "../../../components/form/TextField";
import Button from "../../../components/form/Button";
import RHFSelect from "../../../components/form/RHFSelect";
import useCreateProduct from "../hooks/useCreateProduct";

function CreateProductForm() {
  const product = useCreateProduct();

  return (
    <form
      onSubmit={product.handleSubmit(product.handleProductSubmission)}
      className="space-y-8"
    >
      <TextField
        label="title"
        name="title"
        register={product.register}
        errors={product.errors}
      />
      <TextField
        label="quantity"
        name="quantity"
        type="number"
        register={product.register}
        errors={product.errors}
      />
      <TextField
        label="price"
        name="price"
        type="number"
        register={product.register}
        errors={product.errors}
      />
      <RHFSelect
        label="category"
        name="category"
        options={product.categoriesState.categories}
        register={product.register}
        errors={product.errors}
      />
      <Button className="w-full"> Submit</Button>
    </form>
  );
}

export default CreateProductForm;
