import { createPortal } from 'react-dom';
import Button from './Button';
import Input from './Input';

const AddTaskDialog = ({ isOpen, handleClose }) => {
  if (!isOpen) return null;
  return createPortal(
    <div className="fixed bottom-0 left-0 top-0 flex h-screen w-screen flex-col items-center justify-center backdrop-blur-sm">
      <div className="w-[336px] rounded-xl bg-white p-5 text-center shadow">
        <div>
          <h2 className="text-lg font-semibold text-[#35383E]">Nova Tarefa</h2>
          <p className="mt-1 text-sm text-[#9A9C9F]">
            Insira as informações abaixo
          </p>
        </div>

        <div className="flex flex-col">
          <Input
            id="title"
            label="Título"
            placeholder="Título da tarefa"
          ></Input>
          <Input id="time" label="Horário"></Input>
          <Input
            id="description"
            label="Descrição"
            placeholder="Descreva a tarefa"
          ></Input>
          <div className="mt-4 flex items-center justify-center gap-3">
            <Button
              className="w-full"
              size="medium"
              variant="secondary"
              onClick={handleClose}
            >
              Cancelar
            </Button>
            <Button className="w-full" size="medium">
              Salvar
            </Button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default AddTaskDialog;
