import { BaseEntity } from "../BaseEntity";
import { DocumentType } from "../Enums";

export class RAGDocument extends BaseEntity {
  constructor(
    id: string,
    createdAt: Date,
    updatedAt: Date,
    public readonly title: string,
    public readonly content: string,
    public readonly documentType: DocumentType,
    public readonly tags: string[],
    public readonly isActive: boolean,
    public readonly examTypeId?: string,
    public readonly subjectId?: string,
    public readonly topicId?: string,
    public readonly embeddings?: number[]
  ) {
    super(id, createdAt, updatedAt);
  }
} 