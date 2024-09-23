import "./task-modal.css";

interface TaskModalProps {
  task: string;
  setTask: (task: string) => void;
  onAdd: () => void;
  onCancel: () => void;
}

export function TaskModal({ task, setTask, onAdd, onCancel }: TaskModalProps) {
  return (
    <>
      <div className="modal">
        <div className="modal-container">
          <h2>Nova tarefa</h2>

          <div className="modal-input">
            <label htmlFor="titulo">Título</label>
            <input
              type="text"
              name="titulo"
              id="titulo"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Digite"
            />
          </div>

          <div className="buttons-container">
            <button className="cancel-button" type="button" onClick={onCancel}>
              Cancelar
            </button>
            <button className="add-button-modal" type="button" onClick={onAdd}>
              Adicionar
            </button>
          </div>
        </div>
      </div>
      <div className="overlay" />
    </>
  );
}
