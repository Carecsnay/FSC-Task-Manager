const Button = ({ children, variant = 'primary', ...rest }) => {
  const variants = {
    primary: 'bg-[#00ADB5] text-[#E6F7F8]',
    ghost: 'bg-transparent text-[#35383E]',
  };

  return (
    <button
      className={`${variants[variant] || variants.primary} flex items-center gap-1 rounded px-3 py-1.5 text-xs font-semibold transition hover:opacity-60`}
      {...rest} //todas as propriedades de um botão
    >
      {children}
    </button>
  );
};

export default Button;
