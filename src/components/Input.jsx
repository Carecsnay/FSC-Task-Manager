import { forwardRef } from 'react';
import InputErrorMessage from './InputErrorMessage';
import InputLabel from './InputLabel';

const Input = forwardRef(({ label, errorMessage, ...rest }, ref) => {
  return (
    <div className="flex flex-col space-y-1 text-start">
      <InputLabel
        htmlFor={rest.id}
        className="mt-4 text-sm font-semibold text-brand-dark-blue"
      >
        {label}
      </InputLabel>
      <input
        className="border-dark-gray rounded-lg border border-solid px-4 py-3 text-sm outline-brand-primary"
        label={label}
        ref={ref}
        {...rest}
      ></input>
      {errorMessage && <InputErrorMessage>{errorMessage}</InputErrorMessage>}
    </div>
  );
});

Input.displayName = 'input';

export default Input;
