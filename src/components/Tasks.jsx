import { AddIcon, TrashIcon } from '../assets/icons';
import Button from './Button';

const Tasks = () => {
  return (
    <div className="w-full px-8 py-16">
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-semibold text-[#00ADB5]">Início</h2>
          <span className="text-sm font-semibold">Minhas tarefas</span>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost">
            Limpar Tarefas <TrashIcon />
          </Button>
          <Button>
            Nova Tarefa <AddIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
