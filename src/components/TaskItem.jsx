import { CheckIcon, DetailsIcon, LoaderIcon, TrashIcon } from '../assets/icons';
import Button from './Button';

const TaskItem = ({ task, handleCheckBoxClick, handleDeleteClick }) => {
  const statusVariants = {
    done: 'bg-[#00ADB5] text-[#00ADB5]',
    in_progress: 'bg-[#ffaa04] text-[#ffaa04]',
    not_started: 'bg-[#35383e]/10 text-[#35383e]',
  };

  const currentVariant =
    statusVariants[task?.status] || statusVariants['not_started'];

  return (
    <div
      className={`flex items-center justify-between gap-2 rounded bg-opacity-10 px-4 py-3 text-sm transition ${currentVariant}`}
    >
      <div className="flex items-center justify-center gap-2">
        <label
          className={`relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg ${currentVariant}`}
        >
          <input
            type="checkbox"
            checked={task.status === 'done'}
            className="absolute h-full w-full cursor-pointer opacity-0"
            onChange={() => handleCheckBoxClick(task.id)}
          />
          {task.status === 'done' && <CheckIcon />}
          {task.status === 'in_progress' && (
            <LoaderIcon className="animate-spin" />
          )}
        </label>
        {task.title}
      </div>
      <div className="flex items-center justify-center gap-2">
        <Button variant="ghost" onClick={() => handleDeleteClick(task.id)}>
          <TrashIcon className="opacity-80 hover:text-red-900 hover:opacity-100" />
        </Button>
        <a href="/#" className="transition-all hover:opacity-75">
          <DetailsIcon className="text-[#35383E] opacity-80" />
        </a>
      </div>
    </div>
  );
};

export default TaskItem;
