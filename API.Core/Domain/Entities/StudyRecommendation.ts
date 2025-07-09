import { BaseEntity } from "../BaseEntity";
import { RecommendationType, Priority } from "../Enums";

export class StudyRecommendation extends BaseEntity {
  constructor(
    id: string,
    createdAt: Date,
    updatedAt: Date,
    public readonly userId: string,
    public readonly recommendationType: RecommendationType,
    public readonly priority: Priority,
    public readonly title: string,
    public readonly description: string,
    public readonly isCompleted: boolean,
    public readonly relatedSubjectId?: string,
    public readonly relatedTopicId?: string,
    public readonly estimatedTime?: number,
    public readonly validUntil?: Date
  ) {
    super(id, createdAt, updatedAt);
  }
} 