import type { Task } from "../entities/Task";
import type { Priority, Category, Status, SortByDueDate} from "../entities/TaskEnums";

export interface TaskFilter {
  status?: Status;
  priority?: Priority;
  category?: Category;
  searchTerm?: string;
  sortByDueDate?: SortByDueDate;
}

export interface ITaskRepository {
  getAll(filter?: TaskFilter): Promise<Task[]>;
  getById(id: string): Promise<Task | null>;
  create(task: Task): Promise<Task>;
  update(task: Task): Promise<Task>;
  markAsCompleted(id: string): Promise<Task>;
  delete(id: string): Promise<void>;
}
