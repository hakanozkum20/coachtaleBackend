import { BaseEntity } from "../BaseEntity";

export class ExamType extends BaseEntity {
  constructor(
    id: string,
    createdAt: Date,
    updatedAt: Date,
    public readonly name: string,
    public readonly code: string,
    public readonly description: string,
    public readonly totalQuestions: number,
    public readonly duration: number, // dakika
    public readonly isActive: boolean
  ) {
    super(id, createdAt, updatedAt);
  }
} 