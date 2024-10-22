function RHFSelect({
  label,
  name,
  options,
  register,
  required,
  errors,
  validationSchema = {},
}) {
  return (
    <div>
      <label htmlFor="category" className="block mb-2 text-secondary-800 text-left">
        {label} {required && <span className="text-secondary-error">*</span>}
      </label>
      <select
        id={name}
        {...register(name, validationSchema)}
        className="textField__input"
      >
        <option value="">select ... </option>
        {options.map((option) => (
          <option key={option.id} value={option.title}>
            {option.title}
          </option>
        ))}
      </select>
      {errors && errors[name] && (
        <span className="text-secondary-error block mt-2 text-sm text-left">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default RHFSelect;
