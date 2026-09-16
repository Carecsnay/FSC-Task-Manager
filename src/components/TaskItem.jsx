import PropTypes from 'prop-types';
import { memo } from 'react';
import { CheckIcon, DetailsIcon, LoaderIcon, TrashIcon } from '../assets/icons';
import Button from './Button';

const statusVariants = {
  done: 'bg-brand-primary text-brand-primary',
  in_progress: 'bg-brand-process text-brand-process',
  not_started: 'bg-brand-dark-blue/10 text-brand-dark-blue',
};

const TaskItem = ({ task, handleCheckboxClick, handleDeleteClick }) => {
  const currentVariant =
    statusVariants[task?.status] || statusVariants['not_started'];

  const onCheckboxChange = () => handleCheckboxClick(task.id);
  const onDeleteClick = () => handleDeleteClick(task.id);

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
            onChange={onCheckboxChange}
          />
          {task.status === 'done' && <CheckIcon />}
          {task.status === 'in_progress' && (
            <LoaderIcon className="animate-spin" />
          )}
        </label>
        {task.title}
      </div>

      <div className="flex items-center justify-center gap-2">
        <Button color="ghost" onClick={onDeleteClick}>
          <TrashIcon className="opacity-80 hover:text-brand-danger hover:opacity-100" />
        </Button>
        <a href="/#" className="transition-all hover:opacity-75">
          <DetailsIcon className="text-brand-dark-blue opacity-80" />
        </a>
      </div>
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  handleCheckboxClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
};

export default memo(TaskItem);
