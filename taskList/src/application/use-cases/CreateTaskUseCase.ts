import type { ITaskRepository } from "../../domain/repositories/ITaskRepository";
import type { NewTask } from "../../domain/entities/NewTask";
import { Status } from "../../domain/entities/TaskEnums";
import type { Task } from "../../domain/entities/Task";

export class CreateTaskUseCase {
  private readonly repository: ITaskRepository;

  constructor(repository: ITaskRepository) {
    this.repository = repository;
  }

  async execute(newTask: NewTask): Promise<Task> {
    const taskWithDefaultStatus: NewTask = {
      ...newTask,
      status: newTask.status ?? Status.PENDING
    };

    return await this.repository.create(taskWithDefaultStatus);
  }
}
