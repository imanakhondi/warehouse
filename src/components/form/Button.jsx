const btnType={
    primary: 'btn--primary',
    secondary: 'btn--secondary',
    outline: 'btn--outline',
    danger: 'btn--danger', 
}


function Button({
  onclick,
  children,
  variant = "primary",
  className,
  ...rest
}) {
  return (
    <button
      className={`btn ${btnType[variant]} ${className}`}
      onClick={onclick}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
