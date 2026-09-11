import InputLabel from './InputLabel';

const TimeSelect = ({ errorMessage, ...prop }) => {
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
        {...prop}
      >
        <option value="morning">Manhã</option>
        <option value="afternoon">Tarde</option>
        <option value="evening">Noite</option>
      </select>

      {errorMessage && (
        <span className="pl-1 text-left text-xs text-red-500">
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default TimeSelect;
