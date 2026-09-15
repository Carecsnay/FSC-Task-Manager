import { tv } from 'tailwind-variants';

// o Rest basicamente pega todas as propriedades, exceto as que eu desestruturei tipo a className
const Button = ({
  children,
  icon,
  color = 'primary',
  size = 'small',
  className,
  ...rest
}) => {
  const button = tv({
    base: 'flex items-center justify-center gap-2 rounded-lg px-3 font-semibold transition hover:opacity-80',
    variants: {
      color: {
        primary: 'bg-brand-primary text-brand-light-gray',
        secondary: 'bg-dark-gray text-brand-dark-blue',
        ghost: 'bg-transparent text-brand-dark-blue',
      },
      size: { small: 'py-1 text-xs', medium: 'py-2 text-sm' },
    },
    defaultVariants: {
      color: 'primary',
      size: 'small',
    },
  });

  return (
    <button className={button({ color, size, className })} {...rest}>
      {children}
      {icon}
    </button>
  );
};

export default Button;
