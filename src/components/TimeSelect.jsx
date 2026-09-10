import InputLabel from './InputLabel';

const TimeSelect = (props) => {
  return (
    <div className="flex flex-col">
      <InputLabel htmlFor="time">Horário</InputLabel>
      <select
        id="times"
        className="rounded-lg border border-solid border-[#ECECEC] px-4 py-3 text-sm outline-[#00ADB5]"
        {...props}
      >
        <option value="morning">Manhã</option>
        <option value="afternoon">Tarde</option>
        <option value="evening">Noite</option>
      </select>
    </div>
  );
};

export default TimeSelect;
