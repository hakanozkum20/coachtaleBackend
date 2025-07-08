import { BaseEntity } from "../BaseEntity";
import { SessionType } from "../Enums";

export class TestSession extends BaseEntity {
  constructor(
    id: string,
    createdAt: Date,
    updatedAt: Date,
    public readonly userId: string,
    public readonly examTypeId: string,
    public readonly sessionType: SessionType,
    public readonly name: string,
    public readonly totalQuestions: number,
    public readonly completedAt: Date,
    public readonly overallScore?: number,
    public readonly netScore?: number
  ) {
    super(id, createdAt, updatedAt);
  }
} 