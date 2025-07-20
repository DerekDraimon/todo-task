import { Priority, Category, Status } from "./TaskEnums";

export interface NewTask {
  title: string;
  description: string;
  dueDate: Date;
  priority: Priority;
  category: Category;
  status?: Status; 
}
