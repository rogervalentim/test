import "./delete-modal.css";

interface DeleteModalProps {
  onDelete: () => void;
  onCancel: () => void;
}

export function DeleteModal({ onDelete, onCancel }: DeleteModalProps) {
  return (
    <>
      <div className="modal">
        <div className="modal-container">
          <h2>Deletar tarefa</h2>
          <p>Tem certeza que você deseja deletar essa tarefa?</p>
          <div className="buttons-container">
            <button className="cancel-button" type="button" onClick={onCancel}>
              Cancelar
            </button>
            <button
              className="delete-button-modal"
              type="button"
              onClick={onDelete}
            >
              Deletar
            </button>
          </div>
        </div>
      </div>
      <div className="overlay" />
    </>
  );
}
