import type { ITaskRepository } from "../../domain/repositories/ITaskRepository";
import { Status } from "../../domain/entities/TaskEnums";
import type { Task } from "../../domain/entities/Task";

export class CreateTaskUseCase {
  private readonly repository: ITaskRepository;

  constructor(repository: ITaskRepository) {
    this.repository = repository;
  }

  async execute(newTask: Task): Promise<Task> {
    const taskWithDefaultStatus: Task = {
      ...newTask,
      status: newTask.status ?? Status.PENDING
    };

    return await this.repository.create(taskWithDefaultStatus);
  }
}
