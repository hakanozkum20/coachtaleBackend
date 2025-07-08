import { BaseEntity } from "../BaseEntity";

export class AssessmentResponse extends BaseEntity {
  constructor(
    id: string,
    createdAt: Date,
    updatedAt: Date,
    public readonly assessmentId: string,
    public readonly questionId: string,
    public readonly selectedOption: string,
    public readonly responseTime?: number
  ) {
    super(id, createdAt, updatedAt);
  }
} 