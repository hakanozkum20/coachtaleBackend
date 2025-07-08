import { BaseEntity } from "../BaseEntity";

export class Subject extends BaseEntity {
  constructor(
    id: string,
    createdAt: Date,
    updatedAt: Date,
    public readonly examTypeId: string,
    public readonly name: string,
    public readonly code: string,
    public readonly questionCount: number,
    public readonly isActive: boolean
  ) {
    super(id, createdAt, updatedAt);
  }
} 