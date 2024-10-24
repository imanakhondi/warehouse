import TextField from "../../../components/form/TextField";
import Button from "../../../components/form/Button";
import RHFSelect from "../../../components/form/RHFSelect";
import useFilterProducts from "../hooks/useFilterProduct";

const sortOptions = [
  { id: 1, title: "latest" },
  { id: 2, title: "earliest" },
];

function FilterProducts({ onClose }) {
  const filterProduct = useFilterProducts(onClose);

  return (
    <div>
      <form
        onSubmit={filterProduct.handleSubmit(filterProduct.handleFilterSubmit)}
        className="space-y-8"
      >
        <TextField
          label="title"
          name="title"
          register={filterProduct.register}
          errors={filterProduct.errors}
        />
        <RHFSelect
          label="category"
          name="category"
          options={filterProduct.categoriesState.categories}
          register={filterProduct.register}
          errors={filterProduct.errors}
        />
        <RHFSelect
          label="sortOrder"
          name="sortOrder"
          options={sortOptions}
          register={filterProduct.register}
          errors={filterProduct.errors}
        />
        <Button className="w-full"> Filter</Button>
      </form>
    </div>
  );
}

export default FilterProducts;
