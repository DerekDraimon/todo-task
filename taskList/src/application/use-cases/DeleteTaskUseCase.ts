import type { ITaskRepository } from "../../domain/repositories/ITaskRepository";

export class DeleteTaskUseCase {
  private readonly repository: ITaskRepository;

  constructor(repository: ITaskRepository) {
    this.repository = repository;
  }

  async execute(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
