// o Rest basicamente pega todas as propriedades, exceto as que eu desestruturei tipo a className
const Button = ({
  children,
  icon,
  variant = 'primary',
  size = 'small',
  className,
  ...rest
}) => {
  const variants = {
    primary: 'bg-[#00ADB5] text-[#E6F7F8]',
    secondary: 'bg-[#EEEEEE] text-[#35383E]',
    ghost: 'bg-transparent text-[#35383E]',
  };

  const sizes = {
    small: 'py-1 text-xs',
    medium: 'py-2 text-sm',
  };

  // Garante o caso passem uma prop inválida || valor default (fallback)
  const selectedVariant = variants[variant] || variants.primary;
  const selectedSize = sizes[size] || sizes.small;

  return (
    <button
      className={`${selectedVariant} ${selectedSize} flex items-center justify-center gap-2 rounded-lg px-3 font-semibold transition hover:opacity-80 active:opacity-90 ${className}`}
      {...rest}
    >
      {children}
      {icon}
    </button>
  );
};

export default Button;
