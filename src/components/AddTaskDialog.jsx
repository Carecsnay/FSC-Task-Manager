import { createPortal } from 'react-dom';
import Button from './Button';

const AddTaskDialog = ({ isOpen }) => {
  if (!isOpen) return null;
  return createPortal(
    <div className="fixed bottom-0 left-0 top-0 flex h-screen w-screen flex-col items-center justify-center backdrop-blur-sm">
      <div className="min-w-96 rounded-xl bg-white p-5 text-center shadow">
        <div>
          <h2 className="text-lg font-semibold text-[#35383E]">Nova Tarefa</h2>
          <p className="mt-1 text-sm text-[#9A9C9F]">
            Insira as informações abaixo
          </p>
        </div>

        <div>
          <p>Título</p>
          <input type="text" placeholder="Título da tarefa" />
          <p>Horário</p>
          <p>Descrição</p>
          <input type="text" placeholder="Título da tarefa" />
        </div>

        <div className="flex flex-row">
          <Button variant="ghost">Cancelar</Button>
          <Button>Salvar</Button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default AddTaskDialog;
