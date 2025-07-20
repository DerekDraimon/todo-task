import type { ITaskRepository, TaskFilter } from "../../domain/repositories/ITaskRepository";
import type { Task } from "../../domain/entities/Task";
import type { NewTask } from "../../domain/entities/NewTask";

export class TaskService implements ITaskRepository {
  private readonly baseUrl = "http://localhost:3000/api/tasks"; // Ajustable al backend real

  async getAll(filter?: TaskFilter): Promise<Task[]> {
    const params = new URLSearchParams();

    if (filter?.status) params.append("status", filter.status);
    if (filter?.priority) params.append("priority", filter.priority);
    if (filter?.category) params.append("category", filter.category);
    if (filter?.searchTerm) params.append("search", filter.searchTerm);
    if (filter?.sortByDueDate) params.append("sort", filter.sortByDueDate);

    const response = await fetch(`${this.baseUrl}?${params.toString()}`);
    if (!response.ok) throw new Error("Error al obtener tareas");
    return await response.json();
  }

  async getById(id: string): Promise<Task | null> {
    const response = await fetch(`${this.baseUrl}/${id}`);
    if (!response.ok) return null;
    return await response.json();
  }

  async create(task: NewTask): Promise<Task> {
    const response = await fetch(this.baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task)
    });
    if (!response.ok) throw new Error("Error al crear tarea");
    return await response.json();
  }

  async update(id: string, task: Partial<NewTask>): Promise<Task> {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task)
    });
    if (!response.ok) throw new Error("Error al actualizar tarea");
    return await response.json();
  }

  async markAsCompleted(id: string): Promise<Task> {
    const response = await fetch(`${this.baseUrl}/${id}/complete`, {
      method: "PATCH"
    });
    if (!response.ok) throw new Error("Error al marcar tarea como completada");
    return await response.json();
  }

  async delete(id: string): Promise<void> {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: "DELETE"
    });
    if (!response.ok) throw new Error("Error al eliminar tarea");
  }
}
