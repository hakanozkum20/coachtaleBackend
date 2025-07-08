import { BaseEntity } from "../BaseEntity";

export class AssessmentQuestion extends BaseEntity {
  constructor(
    id: string,
    createdAt: Date,
    updatedAt: Date,
    public readonly question: string,
    public readonly options: string[],
    public readonly category: string, // 'MOTIVATION', 'LEARNING_STYLE', 'PERSONALITY', etc.
    public readonly weight: number,
    public readonly isActive: boolean,
    public readonly order: number
  ) {
    super(id, createdAt, updatedAt);
  }
} 