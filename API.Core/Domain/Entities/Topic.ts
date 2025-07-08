import { BaseEntity } from "../BaseEntity";

export class Topic extends BaseEntity {
  constructor(
    id: string,
    createdAt: Date,
    updatedAt: Date,
    public readonly subjectId: string,
    public readonly name: string,
    public readonly code: string,
    public readonly isActive: boolean,
    public readonly description?: string,
    public readonly parentTopicId?: string
  ) {
    super(id, createdAt, updatedAt);
  }
} 