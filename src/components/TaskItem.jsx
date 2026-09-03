import { CheckIcon, DetailsIcon, LoaderIcon } from '../assets/icons';

const TaskItem = ({ task }) => {
  const statusVariants = {
    done: 'bg-[#00ADB5] text-[#00ADB5]',
    in_progress: 'bg-[#ffaa04] text-[#ffaa04]',
    not_started: 'bg-[#35383e]/10 text-[#35383e]',
  };

  const currentVariant =
    statusVariants[task?.status] || statusVariants['not_started'];

  return (
    <div
      className={`flex items-center justify-between gap-2 rounded bg-opacity-10 px-4 py-3 text-sm ${currentVariant}`}
    >
      <div className="flex items-center justify-center gap-2">
        <label
          className={`relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg ${currentVariant}`}
        >
          <input
            type="checkbox"
            checked={task.status === 'done'}
            className="absolute h-full w-full cursor-pointer opacity-0"
          />
          {task.status === 'done' && <CheckIcon />}
          {task.status === 'in_progress' && (
            <LoaderIcon className="animate-spin" />
          )}
        </label>
        {task.title}
      </div>

      <a href="/#" className="transition-all hover:opacity-75">
        <DetailsIcon />
      </a>
    </div>
  );
};

export default TaskItem;
