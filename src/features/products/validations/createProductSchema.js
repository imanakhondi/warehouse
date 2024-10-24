import * as yup from "yup";
import messages from "./validationMessages";

const createProductSchema = (categoriesState) => {
  const categoryTitles = categoriesState.categories.map(
    (category) => category.title
  );

  return yup.object().shape({
    title: yup
      .string()
      .required(messages.required.title)
      .min(3, messages.min.title)
      .max(50, messages.max.title.title),
    quantity: yup
      .number()
      .required(messages.required.quantity)
      .positive(messages.positive.quantity)
      .integer(messages.integer.quantity),
    price: yup
      .number()
      .required(messages.required.price)
      .positive(messages.positive.price),
    category: yup
      .string()
      .oneOf(categoryTitles, messages.required.category)
      .required(messages.required.category),
  });
};

export default createProductSchema;
