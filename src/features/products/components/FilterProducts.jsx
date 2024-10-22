import { useForm } from "react-hook-form";
import TextField from "../../../components/form/TextField";
import Button from "../../../components/form/Button";
import { useAppContext } from "../../../context/AppContext";
import { filteredProductActions } from "../../../context/AppActions";
import RHFSelect from "../../../components/form/RHFSelect";

const sortOptions = [
  { id: 1, title: "latest" },
  { id: 2, title: "earliest" },
];

function FilterProducts({ onClose }) {
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

  const handleFilterSubmit = ({ title, category, sortOrder }) => {
    dispatch({
      type: filteredProductActions.FILTER_PRODUCT,
      payload: { title, category, sortOrder },
    });
    onClose();
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleFilterSubmit)} className="space-y-8">
        <TextField
          label="title"
          name="title"
          register={register}
          errors={errors}
        />
        <RHFSelect
          label="category"
          name="category"
          options={categoriesState.categories}
          register={register}
          errors={errors}
        />
        <RHFSelect
          label="sortOrder"
          name="sortOrder"
          options={sortOptions}
          register={register}
          errors={errors}
        />
        <Button className="w-full"> Filter</Button>
      </form>
    </div>
  );
}

export default FilterProducts;
