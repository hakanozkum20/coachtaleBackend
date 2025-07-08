import { BaseEntity } from "../BaseEntity";

export class TestResult extends BaseEntity {
  constructor(
    id: string,
    createdAt: Date,
    updatedAt: Date,
    public readonly testSessionId: string,
    public readonly subjectId: string,
    public readonly topicId: string,
    public readonly correctAnswers: number,
    public readonly wrongAnswers: number,
    public readonly emptyAnswers: number,
    public readonly totalQuestions: number,
    public readonly score?: number,
    public readonly netScore?: number
  ) {
    super(id, createdAt, updatedAt);
  }
} 