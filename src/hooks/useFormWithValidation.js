import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const useFormWithValidation = (schema) =>
  useForm({
    resolver: yupResolver(schema),
  });

export default useFormWithValidation;
