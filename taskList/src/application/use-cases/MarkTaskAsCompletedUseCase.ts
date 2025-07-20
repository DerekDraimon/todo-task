import type { ITaskRepository } from "../../domain/repositories/ITaskRepository";
import type { Task } from "../../domain/entities/Task";

export class MarkTaskAsCompletedUseCase {
  private readonly repository: ITaskRepository;

  constructor(repository: ITaskRepository) {
    this.repository = repository;
  }

  async execute(id: string): Promise<Task> {
    return await this.repository.markAsCompleted(id);
  }
}
