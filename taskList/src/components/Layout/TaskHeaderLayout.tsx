import React, { useState } from "react";
import styles from "./TaskHeaderLayout.module.css";

import { TextInput } from "../ImputText/ImputText";
import { SelectList } from "../SelectList/SelectList";
import { TaskCreator } from "../../interfaces/components/TaskCreator";

interface TaskHeaderLayoutProps {
  title: string;
}

export const TaskHeaderLayout: React.FC<TaskHeaderLayoutProps> = ({
  title
}) => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerTop}>
        <h1 className={styles.title}>{title}</h1>
        <TaskCreator />
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
          value={status}
          options={["", "Pendiente", "Completada"]}
          onChange={(e) => setStatus(e.target.value)}
          label="Estado"
        />
        <SelectList
          name="priority"
          value={priority}
          options={["", "Alta", "Media", "Baja"]}
          onChange={(e) => setPriority(e.target.value)}
          label="Prioridad"
        />
        <SelectList
          name="category"
          value={category}
          options={["", "Estudio", "Trabajo", "Personal"]}
          onChange={(e) => setCategory(e.target.value)}
          label="Categoría"
        />
      </div>
    </div>
  );
};
