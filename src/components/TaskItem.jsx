const TaskItem = ({ task }) => {
  const statusVariants = {
    done: 'bg-[#00ADB5]/10 text-[#00ADB5]',
    in_progress: 'bg-[#ffaa04]/10 text-[#ffaa04]',
    not_started: 'bg-[#35383e]/10 text-[#35383e]',
  };

  const currentVariant =
    statusVariants[task?.status] || statusVariants['not_started'];

  return (
    <div
      className={`flex items-center gap-2 rounded px-4 py-3 text-sm ${currentVariant}`}
    >
      <span className="text-sm font-medium">{task.title}</span>
    </div>
  );
};

export default TaskItem;
