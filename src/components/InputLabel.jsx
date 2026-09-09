const InputLabel = (props) => {
  return (
    <label
      htmlFor="times"
      className="mt-4 text-left text-sm font-semibold text-[#35383E]"
      {...props}
    >
      {props.children}
    </label>
  );
};

export default InputLabel;
