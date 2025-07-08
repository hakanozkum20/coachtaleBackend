import { BaseEntity } from "../BaseEntity";
import { WeaknessLevel } from "../Enums";

export class UserProgress extends BaseEntity {
  public readonly userId: string;
  public readonly subjectId: string;
  public readonly topicId: string;
  public readonly totalAttempts: number;
  public readonly correctAnswers: number;
  public readonly wrongAnswers: number;
  public readonly averageScore: number;
  public readonly lastAttemptAt: Date;
  public readonly improvementRate: number;
  public readonly weaknessLevel: WeaknessLevel;

  constructor(
    id: string,
    createdAt: Date,
    updatedAt: Date,
    userId: string,
    subjectId: string,
    topicId: string,
    totalAttempts: number,
    correctAnswers: number,
    wrongAnswers: number,
    averageScore: number,
    lastAttemptAt: Date,
    improvementRate: number,
    weaknessLevel: WeaknessLevel
  ) {
    super(id, createdAt, updatedAt);
    this.userId = userId;
    this.subjectId = subjectId;
    this.topicId = topicId;
    this.totalAttempts = totalAttempts;
    this.correctAnswers = correctAnswers;
    this.wrongAnswers = wrongAnswers;
    this.averageScore = averageScore;
    this.lastAttemptAt = lastAttemptAt;
    this.improvementRate = improvementRate;
    this.weaknessLevel = weaknessLevel;
  }
} 