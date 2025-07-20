import type { ITaskRepository } from "../../domain/repositories/ITaskRepository";
import type { Task } from "../../domain/entities/Task";
import type { NewTask } from "../../domain/entities/NewTask";

export class UpdateTaskUseCase {
  private readonly repository: ITaskRepository;

  constructor(repository: ITaskRepository) {
    this.repository = repository;
  }

  async execute(id: string, updatedFields: Partial<NewTask>): Promise<Task> {
    return await this.repository.update(id, updatedFields);
  }
}
