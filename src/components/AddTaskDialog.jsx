import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { v4 } from 'uuid';
import './AddTaskDialog.css';
import Button from './Button';
import Input from './Input';
import TimeSelect from './TimeSelect';

const AddTaskDialog = ({ isOpen, handleClose, handleSubmit }) => {
  const [title, setTitle] = useState();
  const [time, setTime] = useState('morning');
  const [description, setDescription] = useState();
  const [errors, setErrors] = useState([]);

  const handleSaveClick = () => {
    const newErrors = [];

    if (!title.trim()) {
      newErrors.push({
        inputError: 'title',
        message: 'O campo titulo é obrigatório.',
      });
    }

    if (!time.trim()) {
      newErrors.push({
        inputError: 'time',
        message: 'O campo horário é obrigatório.',
      });
    }

    if (!description.trim()) {
      newErrors.push({
        inputError: 'description',
        message: 'O campo descrição é obrigatório.',
      });
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    handleSubmit({
      id: v4(),
      title,
      description,
      time,
      status: 'not_started',
    });
    handleClose();
  };

  const titleError = errors.find((error) => error.inputError === 'title');
  const timeError = errors.find((error) => error.inputError === 'time');
  const descriptionError = errors.find(
    (error) => error.inputError === 'description'
  );

  //usado para acessar o elemento HTML da DOM.
  const nodeRef = useRef();

  useEffect(() => {
    if (!isOpen) {
      setTitle('');
      setDescription('');
    }
  }, [isOpen]);

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
              className="w-[336px] rounded-xl border-2 bg-white p-5 text-center shadow"
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
                  onChange={(event) => setTitle(event.target.value)}
                  errorMessage={titleError?.message}
                ></Input>

                <TimeSelect
                  value={time}
                  onChange={(event) => setTime(event.target.value)}
                  errorMessage={timeError?.message}
                />

                <Input
                  id="description"
                  label="Descrição"
                  placeholder="Descriva a tarefa"
                  onChange={(event) => setDescription(event.target.value)}
                  errorMessage={descriptionError?.message}
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
                  <Button
                    className="w-full"
                    size="medium"
                    onClick={handleSaveClick}
                  >
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
