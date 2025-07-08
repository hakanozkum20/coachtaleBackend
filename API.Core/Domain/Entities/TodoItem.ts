import { BaseEntity } from "../BaseEntity";
import { Priority, TodoStatus } from "../Enums";

export class TodoItem extends BaseEntity {
  constructor(
    id: string,
    createdAt: Date,
    updatedAt: Date,
    public readonly userId: string,
    public readonly title: string,
    public readonly priority: Priority,
    public readonly status: TodoStatus,
    public readonly tags: string[],
    public readonly description?: string,
    public readonly dueDate?: Date,
    public readonly completedAt?: Date,
    public readonly relatedSubjectId?: string,
    public readonly relatedTopicId?: string
  ) {
    super(id, createdAt, updatedAt);
  }
} 