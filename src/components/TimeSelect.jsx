import { forwardRef } from 'react';
import InputLabel from './InputLabel';
import InputErrorMessage from './InputErrorMessage';

const TimeSelect = forwardRef(({ errorMessage, ...props }, ref) => {
  return (
    <div className="flex flex-col space-y-1 text-start">
      <InputLabel
        htmlFor="time"
        className="mt-4 text-sm font-semibold text-[#35383E]"
      >
        Horário
      </InputLabel>

      <select
        id="time"
        className="rounded-lg border border-solid border-[#ECECEC] px-4 py-3 text-sm outline-[#00ADB5]"
        ref={ref}
        {...props}
      >
        <option value="morning">Manhã</option>
        <option value="afternoon">Tarde</option>
        <option value="evening">Noite</option>
      </select>

      {errorMessage && <InputErrorMessage>{errorMessage}</InputErrorMessage>}
    </div>
  );
});

TimeSelect.displayName = 'TimeSelect';

export default TimeSelect;
