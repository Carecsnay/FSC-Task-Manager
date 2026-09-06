const Input = ({ label, ...rest }) => {
  return (
    <div className="flex flex-col space-y-1 text-start">
      <label
        htmlFor={rest.id}
        className="mt-4 text-sm font-semibold text-[#35383E]"
      >
        {label}
      </label>
      <input
        className="rounded-lg border border-solid border-[#ECECEC] px-4 py-3 text-sm outline-[#00ADB5]"
        label={label}
        {...rest}
      ></input>
    </div>
  );
};

export default Input;
