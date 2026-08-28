const SidebarButton = ({ children, variant }) => {
  const getVariantClasses = () => {
    if (variant === 'unselected') {
      return 'text-[#35383E]';
    } else {
      return 'bg-[#00ADB5] text-[#E6F7F8]';
    }
  };
  return (
    <>
      <a href="/#" className={`${getVariantClasses()} rounded-lg px-6 py-3`}>
        {children}
      </a>
    </>
  );
};

export default SidebarButton;
