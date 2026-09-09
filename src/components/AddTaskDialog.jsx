import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import './AddTaskDialog.css';
import Button from './Button';
import Input from './Input';
import InputLabel from './InputLabel';

const AddTaskDialog = ({ isOpen, handleClose }) => {
  //usado para acessar o elemento HTML da DOM.
  const nodeRef = useRef();

  return (
    <CSSTransition
      in={isOpen}
      nodeRef={nodeRef}
      timeout={500}
      classNames="add-task-dialog"
      unmountOnExit
    >
      <>
        {createPortal(
          <div
            ref={nodeRef}
            className="fixed bottom-0 left-0 top-0 flex h-screen w-screen flex-col items-center justify-center backdrop-blur-sm"
            onClick={handleClose}
          >
            <div
              className="w-[336px] rounded-xl bg-white p-5 text-center shadow"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <h2 className="text-lg font-semibold text-[#35383E]">
                  Nova Tarefa
                </h2>
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
                <InputLabel htmlFor="time">Horário</InputLabel>
                <select
                  id="times"
                  className="rounded-lg border border-solid border-[#ECECEC] px-4 py-3 text-sm outline-[#00ADB5]"
                >
                  <option value="morning">Manhã</option>
                  <option value="afternoon">Tarde</option>
                  <option value="evening">Noite</option>
                </select>
                <Input
                  id="title"
                  label="Descrição"
                  placeholder="Descriva a tarefa"
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
        )}
      </>
    </CSSTransition>
  );
};

export default AddTaskDialog;
