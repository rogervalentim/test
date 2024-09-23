import Image from "next/image";

import "./task-list.css";

interface TaskListProps {
  tasks: string[];
  completedTasks: string[];
  onDelete: (index: number, isCompletedTask?: boolean) => void;
  onComplete: (index: number) => void;
}

export function TaskList({
  tasks,
  completedTasks,
  onDelete,
  onComplete
}: TaskListProps) {
  if (tasks.length === 0 && completedTasks.length === 0) {
    return (
      <>
        <div className="task-empty">
          <p>Sua lista de tarefas está vazia, adicione uma nova tarefa.</p>
        </div>
      </>
    );
  }

  return (
    <div className="tasks-container">
      <>
        <div className="tasks-text-pending">
          <p>
            {tasks.length === 0
              ? "nenhuma tarefa nova."
              : "Suas tarefas de hoje"}
          </p>
        </div>
        {tasks.length > 0 &&
          tasks.map((task, index) => (
            <div key={index} className="input">
              <div className="checkbox">
                <input
                  type="checkbox"
                  name="task"
                  onChange={() => onComplete(index)}
                />
                <span>{task}</span>
              </div>
              <button
                type="button"
                className="button-trash"
                onClick={() => onDelete(index)}
              >
                <Image
                  src="/trash.svg"
                  width={18}
                  height={20}
                  alt="trash icon"
                />
              </button>
            </div>
          ))}
      </>

      {completedTasks.length > 0 && (
        <div>
          <div className="tasks-text-finished">
            <p>Tarefas finalizadas</p>
          </div>
          {completedTasks.map((task, index) => (
            <div key={index} className="input">
              <div className="checkbox">
                <input type="checkbox" name="task" checked={true} readOnly />
                <span className="completed-task-span">{task}</span>
              </div>
              <button
                type="button"
                className="button-trash"
                onClick={() => onDelete(index, true)}
              >
                <Image
                  src="/trash.svg"
                  width={18}
                  height={20}
                  alt="trash icon"
                />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
