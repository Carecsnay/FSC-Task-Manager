import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import InputErrorMessage from './InputErrorMessage';
import InputLabel from './InputLabel';

const TimeSelect = forwardRef(({ errorMessage, ...props }, ref) => {
  return (
    <div className="flex flex-col space-y-1 text-start">
      <InputLabel
        htmlFor="time"
        className="mt-4 text-sm font-semibold text-brand-dark-blue"
      >
        Horário
      </InputLabel>

      <select
        id="time"
        className="border-dark-gray rounded-lg border border-solid px-4 py-3 text-sm outline-brand-primary"
        ref={ref}
        defaultValue="morning"
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

TimeSelect.propTypes = {
  errorMessage: PropTypes.string,
};

TimeSelect.displayName = 'TimeSelect';

export default TimeSelect;
