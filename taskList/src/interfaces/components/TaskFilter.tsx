// src/interfaces/components/TaskFilter.tsx

import { useState } from "react";

import {
  Status,
  Priority,
  Category
} from "../../domain/entities/TaskEnums";
import { useTasks } from "../../infrastructure/context/TaskContext";
import type { TaskFilter } from "../../domain/repositories/ITaskRepository";

export const TaskFilterBar = () => {
  const { loadTasks } = useTasks();
  const [filters, setFilters] = useState<TaskFilter>({
    status: undefined,
    priority: undefined,
    category: undefined,
    sortByDueDate: undefined
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    const newValue = value === "" ? undefined : value;

    setFilters((prev) => ({
      ...prev,
      [name]: newValue
    }));
  };

  const handleApply = () => {
    loadTasks(filters);
  };

  const handleReset = () => {
    const cleared: TaskFilter = {
      status: undefined,
      priority: undefined,
      category: undefined,
      sortByDueDate: undefined
    };
    setFilters(cleared);
    loadTasks(cleared);
  };

  return (
    <div className="flex flex-wrap gap-4 items-end mb-4 bg-white p-4 rounded shadow border">
      <div className="flex flex-col">
        <label className="text-sm font-medium">Estado</label>
        <select
          name="status"
          value={filters.status ?? ""}
          onChange={handleChange}
          className="border rounded px-2 py-1"
        >
          <option value="">Todos</option>
          {Object.values(Status).map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium">Prioridad</label>
        <select
          name="priority"
          value={filters.priority ?? ""}
          onChange={handleChange}
          className="border rounded px-2 py-1"
        >
          <option value="">Todas</option>
          {Object.values(Priority).map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium">Categoría</label>
        <select
          name="category"
          value={filters.category ?? ""}
          onChange={handleChange}
          className="border rounded px-2 py-1"
        >
          <option value="">Todas</option>
          {Object.values(Category).map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium">Ordenar por fecha</label>
        <select
          name="sortByDueDate"
          value={filters.sortByDueDate ?? ""}
          onChange={handleChange}
          className="border rounded px-2 py-1"
        >
          <option value="">Sin orden</option>
          <option value="asc">Más próxima</option>
          <option value="desc">Más lejana</option>
        </select>
      </div>

      <button
        onClick={handleApply}
        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
      >
        Aplicar
      </button>

      <button
        onClick={handleReset}
        className="text-gray-700 px-3 py-1 border rounded hover:bg-gray-100"
      >
        Limpiar
      </button>
    </div>
  );
};
