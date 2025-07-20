// src/interfaces/components/TaskForm.tsx

import { useState } from "react";
import {
  Priority,
  Category,
  Status
} from "../../domain/entities/TaskEnums";
import type { NewTask } from "../../domain/entities/NewTask";
import { useTasks } from "../../infrastructure/context/TaskContext";

const initialForm: NewTask = {
  title: "",
  description: "",
  dueDate: new Date(),
  priority: Priority.MEDIUM,
  category: Category.PERSONAL,
  status: Status.PENDING
};

export const TaskForm = () => {
  const [form, setForm] = useState<NewTask>(initialForm);
  const { createTask } = useTasks();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "dueDate" ? new Date(value) : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validación simple
    if (!form.title.trim() || !form.description.trim()) {
      alert("El título y la descripción son obligatorios.");
      return;
    }

    await createTask(form);
    setForm(initialForm);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 bg-white rounded shadow border"
    >
      <h2 className="text-xl font-semibold">Nueva Tarea</h2>

      <div>
        <label className="block text-sm font-medium">Título</label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Descripción</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Fecha Límite</label>
        <input
          type="date"
          name="dueDate"
          value={form.dueDate.toISOString().split("T")[0]}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
        />
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium">Prioridad</label>
          <select
            name="priority"
            value={form.priority}
            onChange={handleChange}
            className="w-full border rounded px-2 py-1"
          >
            {Object.values(Priority).map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium">Categoría</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border rounded px-2 py-1"
          >
            {Object.values(Category).map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
      >
        Crear tarea
      </button>
    </form>
  );
};
