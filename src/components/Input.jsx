import InputLabel from './InputLabel';

const Input = ({ label, errorMessage, ...rest }) => {
  return (
    <div className="flex flex-col space-y-1 text-start">
      <InputLabel
        htmlFor={rest.id}
        className="mt-4 text-sm font-semibold text-[#35383E]"
      >
        {label}
      </InputLabel>
      <input
        className="rounded-lg border border-solid border-[#ECECEC] px-4 py-3 text-sm outline-[#00ADB5]"
        label={label}
        {...rest}
      ></input>
      {errorMessage && (
        <span className="pl-1 text-left text-xs text-red-500">
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default Input;
