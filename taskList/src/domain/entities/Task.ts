import { Priority, Category, Status } from "../entities/TaskEnums";

export interface Task {
  id: string; // Puede ser _id de Mongo u otro
  title: string;
  description: string;
  dueDate: Date;
  priority: Priority;
  category: Category;
  status: Status;
  isActive: boolean; // para "eliminar" sin borrar realmente
}
