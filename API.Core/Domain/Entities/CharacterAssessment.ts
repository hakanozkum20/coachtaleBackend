import { BaseEntity } from "../BaseEntity";

export class CharacterAssessment extends BaseEntity {
  constructor(
    id: string,
    createdAt: Date,
    updatedAt: Date,
    public readonly userId: string,
    public readonly characterTypeId: string,
    public readonly confidence: number, // 0-1 arası
    public readonly completedAt: Date
  ) {
    super(id, createdAt, updatedAt);
  }
} 