import React, { useContext } from "react";
import styles from "./TaskHeaderLayout.module.css";

import { TextInput } from "../ImputText/ImputText";
import { SelectList } from "../SelectList/SelectList";
import { TaskContext } from "../../infrastructure/context/TaskContext";
import { Category, Priority, SortByDueDate, Status } from "../../domain/entities/TaskEnums";
import { TaskForm } from "../../interfaces/components/TaskForm";

interface TaskHeaderLayoutProps {
  title: string;
}

export const TaskHeaderLayout: React.FC<TaskHeaderLayoutProps> = ({
  title
}) => {
  const { search, setSearch, status, setStatus, priority, setPriority, category, setCategory, sortByDueDate, setSortByDueDate, createTask } = useContext(TaskContext);

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerTop}>
        <h1 className={styles.title}>{title}</h1>
        <div>
          {/* <ThemeToggle /> */}
          <TaskForm
            title="Crear nueva tarea"
            onSubmit={createTask}
          />
        </div>
      </div>
      <div className={styles.filters}>
        <TextInput
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          label="Buscar"
        />

        <SelectList
          name="status"
          label="Estado"
          value={status}
          onChange={(e) => setStatus(e.target.value as Status)}
          options={Object.values(Status)}
        />

        <SelectList
          name="priority"
          value={priority}
          options={Object.values(Priority)}
          onChange={(e) => setPriority(e.target.value as Priority)}
          label="Prioridad"
        />

        <SelectList<Category>
          label="Categoría"
          name="category"
          value={category}
          options={Object.values(Category)}
          onChange={(e) => setCategory(e.target.value as Category)}
        />

        <SelectList
          name="shortByDueDate"
          value={sortByDueDate}
          options={Object.values(SortByDueDate)}
          onChange={(e) => setSortByDueDate(e.target.value as SortByDueDate)}
          label="Ordenar por fecha de vencimiento"
        />
      </div>
    </div>

  );
};
