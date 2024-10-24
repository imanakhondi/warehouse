import * as yup from "yup";
const filterProductSchema = () =>
  yup.object().shape({
    title: yup.string().optional(),
    category: yup.string().optional(),
    sortOrder: yup.string().optional(),
  });

export default filterProductSchema;
