"use client";

import { useEffect, useState } from "react";
import { TaskList } from "../task-list/task-list";
import { TaskModal } from "../task-modal/task-modal";
import { DeleteModal } from "../delete-modal/delete-modal";
import "./form.css";

export function Form() {
  const [pendingTasks, setPendingTasks] = useState<string[]>([]);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [task, setTask] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showModalCancel, setShowModalCancel] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<number | null>(null);
  const [isDeletingCompletedTask, setIsDeletingCompletedTask] = useState(false);

  useEffect(() => {
    const savedPendingTasks = JSON.parse(
      localStorage.getItem("pendingTasks") || "[]"
    );
    const savedCompletedTasks = JSON.parse(
      localStorage.getItem("completedTasks") || "[]"
    );
    setPendingTasks(savedPendingTasks);
    setCompletedTasks(savedCompletedTasks);
  }, []);

  const addTask = () => {
    if (task.trim() === "") {
      alert("A tarefa não pode estar vazia");
      return;
    }

    const newPendingTasks = [...pendingTasks, task];
    setPendingTasks(newPendingTasks);
    localStorage.setItem("pendingTasks", JSON.stringify(newPendingTasks));
    setTask("");
    setShowModal(false);
  };

  const removeTask = () => {
    if (taskToDelete !== null) {
      if (isDeletingCompletedTask) {
        const newCompletedTasks = completedTasks.filter(
          (_, i) => i !== taskToDelete
        );
        setCompletedTasks(newCompletedTasks);
        localStorage.setItem(
          "completedTasks",
          JSON.stringify(newCompletedTasks)
        );
      } else {
        const newPendingTasks = pendingTasks.filter(
          (_, i) => i !== taskToDelete
        );
        setPendingTasks(newPendingTasks);
        localStorage.setItem("pendingTasks", JSON.stringify(newPendingTasks));
      }
      setShowModalCancel(false);
    }
  };

  const toggleTaskCompletion = (index: number) => {
    const completedTask = pendingTasks[index];
    const updatedPendingTasks = pendingTasks.filter((_, i) => i !== index);
    const updatedCompletedTasks = [...completedTasks, completedTask];

    setPendingTasks(updatedPendingTasks);
    setCompletedTasks(updatedCompletedTasks);

    localStorage.setItem("pendingTasks", JSON.stringify(updatedPendingTasks));
    localStorage.setItem(
      "completedTasks",
      JSON.stringify(updatedCompletedTasks)
    );
  };

  const toggleModalCancel = (index: number, isCompletedTask = false) => {
    setTaskToDelete(index);
    setIsDeletingCompletedTask(isCompletedTask);
    setShowModalCancel(true);
  };

  return (
    <>
      <form>
        <div className="form-container">
          <TaskList
            tasks={pendingTasks}
            completedTasks={completedTasks}
            onDelete={toggleModalCancel}
            onComplete={toggleTaskCompletion}
          />
        </div>
      </form>
      <div className="button-container">
        <button
          className="add-button"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Adicionar tarefa
        </button>
      </div>

      {showModal && (
        <TaskModal
          task={task}
          setTask={setTask}
          onAdd={addTask}
          onCancel={() => setShowModal(false)}
        />
      )}

      {showModalCancel && (
        <DeleteModal
          onDelete={removeTask}
          onCancel={() => setShowModalCancel(false)}
        />
      )}
    </>
  );
}
