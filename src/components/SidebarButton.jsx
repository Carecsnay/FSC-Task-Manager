const SidebarButton = ({ children, variant }) => {
  const getVariantClasses = () => {
    if (variant === 'unselected') {
      return 'text-brand-dark-blue';
    } else {
      return 'bg-brand-primary text-brand-light-gray';
    }
  };
  return (
    <>
      <a
        href="/#"
        className={`${getVariantClasses()} flex items-center gap-2 rounded-lg px-6 py-3`}
      >
        {children}
      </a>
    </>
  );
};

export default SidebarButton;
