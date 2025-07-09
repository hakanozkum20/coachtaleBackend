import { BaseEntity } from "../BaseEntity";
import { WeaknessLevel } from "../Enums";

export class UserProgress extends BaseEntity {
  constructor(
    id: string,
    createdAt: Date,
    updatedAt: Date,
    public readonly userId: string,
    public readonly subjectId: string,
    public readonly topicId: string,
    public readonly totalAttempts: number,
    public readonly correctAnswers: number,
    public readonly wrongAnswers: number,
    public readonly averageScore: number,
    public readonly lastAttemptAt: Date,
    public readonly improvementRate: number,
    public readonly weaknessLevel: WeaknessLevel
  ) {
    super(id, createdAt, updatedAt);
  }
} 