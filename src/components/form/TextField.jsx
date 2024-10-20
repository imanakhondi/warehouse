function TextField({
  label,
  name,
  type = "text",
  register,
  errors,
  validationSchema = {},
  required,
}) {
  return (
    <div>
      <label htmlFor={name} className="block mb-2 text-secondary-800 text-left">
        {label} {required && <span className="text-secondary-error">*</span>}
      </label>
      <input
        className="textField__input"
        type={type}
        id={name}
        autoComplete="off"
        {...register(name, validationSchema)}
      />
      {errors && errors[name] && (
        <span className="text-secondary-error block mt-2 text-sm text-left">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default TextField;
