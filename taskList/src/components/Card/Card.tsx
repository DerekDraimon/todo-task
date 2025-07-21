import React from "react";
import styles from "./Card.module.css";
import { Button } from "../Button/Button";
import { Status } from "../../domain/entities/TaskEnums";
import type { Task } from "../../domain/entities/Task";

type Props = {
  task: Task;
  handleComplete: (id: string) => void;
  handleDelete: (id: string) => void;
};

export const TaskCard: React.FC<Props> = ({ task, handleComplete, handleDelete }) => {
  return (
    <div className={styles.card}>
      <div className={styles.topRow}>
        <div className={styles.taskContent}>
          <h2 className={styles.title}>{task.title}</h2>
          <p className={styles.description}>{task.description}</p>
          <p className={styles.details}>
            Vence: {new Date(task.dueDate).toLocaleDateString()} | Prioridad: {task.priority}
            <br />
            Categoría: {task.category} | Estado: {task.status}
          </p>
        </div>
        <div className={styles.actions}>
          {task.status !== Status.COMPLETED && (
            <Button variant="primary" onClick={() => handleComplete(task.id)}>
              Completar
            </Button>
          )}
          <Button variant="secondary" onClick={() => handleDelete(task.id)}>
            Eliminar
          </Button>
        </div>
      </div>
    </div>
  );
};
