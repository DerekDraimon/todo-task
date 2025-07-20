// src/interfaces/components/SearchBar.tsx

import { useState } from "react";
import { useTasks } from "../../infrastructure/context/TaskContext";

export const SearchBar = () => {
  const { loadTasks } = useTasks();
  const [search, setSearch] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loadTasks({ searchTerm: search });
  };

  const handleClear = () => {
    setSearch("");
    loadTasks();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-center mb-4">
      <input
        type="text"
        placeholder="Buscar por título o descripción..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 border rounded px-2 py-1"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
      >
        Buscar
      </button>
      <button
        type="button"
        onClick={handleClear}
        className="text-gray-700 px-3 py-1 border rounded hover:bg-gray-100"
      >
        Limpiar
      </button>
    </form>
  );
};
