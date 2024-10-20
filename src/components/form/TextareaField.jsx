function TextareaField({
  name,
  label,
  register,
  required,
  validationSchema={},
  errors,
}) {
  return (
    <div>
      <label htmlFor={name} className="block mb-2 text-secondary-800 text-left">
        {label} {required && <span className="text-secondary-error">*</span>}
      </label>
      <textarea
        className="textField__input"
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

export default TextareaField;
