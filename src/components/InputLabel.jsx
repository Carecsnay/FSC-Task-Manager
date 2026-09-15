const InputLabel = (props) => {
  return (
    <label
      htmlFor="times"
      className="mt-4 text-left text-sm font-semibold text-brand-dark-blue"
      {...props}
    >
      {props.children}
    </label>
  );
};

export default InputLabel;
