import { BaseEntity } from "../BaseEntity";

export class CharacterType extends BaseEntity {
  constructor(
    id: string,
    createdAt: Date,
    updatedAt: Date,
    public readonly name: string,
    public readonly code: string,
    public readonly description: string,
    public readonly traits: string[],
    public readonly communicationStyle: string,
    public readonly motivationApproach: string,
    public readonly studyRecommendations: string,
    public readonly aiPersonaPrompt: string,
    public readonly isActive: boolean
  ) {
    super(id, createdAt, updatedAt);
  }
} 