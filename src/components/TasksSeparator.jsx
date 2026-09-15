const TasksSeparator = ({ title, icon }) => {
  return (
    <div className="flex gap-2 border-b border-solid border-brand-border pb-1">
      {icon}
      <p className="text-text-gray text-sm">{title}</p>
    </div>
  );
};

export default TasksSeparator;
