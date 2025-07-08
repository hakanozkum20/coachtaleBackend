import { BaseEntity } from "../BaseEntity";
import { RecommendationType, Priority } from "../Enums";

export class StudyRecommendation extends BaseEntity {
  public readonly userId: string;
  public readonly recommendationType: RecommendationType;
  public readonly priority: Priority;
  public readonly title: string;
  public readonly description: string;
  public readonly relatedSubjectId?: string;
  public readonly relatedTopicId?: string;
  public readonly estimatedTime?: number;
  public readonly isCompleted: boolean;
  public readonly validUntil?: Date;

  constructor(
    id: string,
    createdAt: Date,
    updatedAt: Date,
    userId: string,
    recommendationType: RecommendationType,
    priority: Priority,
    title: string,
    description: string,
    isCompleted: boolean,
    relatedSubjectId?: string,
    relatedTopicId?: string,
    estimatedTime?: number,
    validUntil?: Date
  ) {
    super(id, createdAt, updatedAt);
    this.userId = userId;
    this.recommendationType = recommendationType;
    this.priority = priority;
    this.title = title;
    this.description = description;
    this.relatedSubjectId = relatedSubjectId;
    this.relatedTopicId = relatedTopicId;
    this.estimatedTime = estimatedTime;
    this.isCompleted = isCompleted;
    this.validUntil = validUntil;
  }
} 