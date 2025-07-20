import type { ITaskRepository, TaskFilter } from "../../domain/repositories/ITaskRepository";
import type { Task } from "../../domain/entities/Task";

export class GetTasksUseCase {
  private readonly repository: ITaskRepository;

  constructor(repository: ITaskRepository) {
    this.repository = repository;
  }

  async execute(filter?: TaskFilter): Promise<Task[]> {
    return await this.repository.getAll(filter);
  }
}
