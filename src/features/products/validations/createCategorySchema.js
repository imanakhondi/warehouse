import * as yup from "yup";
import messages from "./validationMessages";

const createCategorySchema = () =>
  yup.object().shape({
    title: yup
      .string()
      .required(messages.required.title)
      .min(3, messages.min.title)
      .max(50, messages.max.title),
    description: yup
      .string()
      .optional()
      .max(500, messages.max.title.description),
  });

export default createCategorySchema;
