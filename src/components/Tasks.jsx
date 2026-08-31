import {
  AddIcon,
  CloudSunIcon,
  MoonIcon,
  SunIcon,
  TrashIcon,
} from '../assets/icons';
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

      <div className="rounded bg-white p-6">
        <div className="my-6 space-y-3">
          <div className="gap-2 border-b border-solid border-[#f4f4f5] pb-1">
            <p className="flex items-center gap-1 text-sm text-[##9A9C9F]">
              <SunIcon />
              Manhã
            </p>
          </div>
        </div>

        <div className="my-6 space-y-3">
          <div className="gap-2 border-b border-solid border-[#f4f4f5] pb-1">
            <p className="flex items-center gap-1 text-sm text-[##9A9C9F]">
              <CloudSunIcon />
              Tarde
            </p>
          </div>
        </div>

        <div className="my-6 space-y-3">
          <div className="gap-2 border-b border-solid border-[#f4f4f5] pb-1">
            <p className="flex items-center gap-1 text-sm text-[##9A9C9F]">
              <MoonIcon />
              Noite
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
