import type { Task } from "../entities/Task";
import type { NewTask } from "../entities/NewTask";
import type { Priority, Category, Status } from "../entities/TaskEnums";

export interface TaskFilter {
  status?: Status;
  priority?: Priority;
  category?: Category;
  searchTerm?: string;
  sortByDueDate?: "asc" | "desc";
}

export interface ITaskRepository {
  getAll(filter?: TaskFilter): Promise<Task[]>;
  getById(id: string): Promise<Task | null>;
  create(task: NewTask): Promise<Task>;
  update(id: string, task: Partial<NewTask>): Promise<Task>;
  markAsCompleted(id: string): Promise<Task>;
  delete(id: string): Promise<void>;
}
