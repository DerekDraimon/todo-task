import { Priority, Category, Status } from "../entities/TaskEnums";

export interface Task {
  id: string; 
  title: string;
  description: string;
  dueDate: Date;
  priority: Priority;
  category: Category;
  status: Status;
  isActive: boolean; 
}
