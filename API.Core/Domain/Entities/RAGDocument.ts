import { BaseEntity } from "../BaseEntity";
import { DocumentType } from "../Enums";

export class RAGDocument extends BaseEntity {
  public readonly title: string;
  public readonly content: string;
  public readonly documentType: DocumentType;
  public readonly examTypeId?: string;
  public readonly subjectId?: string;
  public readonly topicId?: string;
  public readonly tags: string[];
  public readonly embeddings?: number[];
  public readonly isActive: boolean;

  constructor(
    id: string,
    createdAt: Date,
    updatedAt: Date,
    title: string,
    content: string,
    documentType: DocumentType,
    tags: string[],
    isActive: boolean,
    examTypeId?: string,
    subjectId?: string,
    topicId?: string,
    embeddings?: number[]
  ) {
    super(id, createdAt, updatedAt);
    this.title = title;
    this.content = content;
    this.documentType = documentType;
    this.examTypeId = examTypeId;
    this.subjectId = subjectId;
    this.topicId = topicId;
    this.tags = tags;
    this.embeddings = embeddings;
    this.isActive = isActive;
  }
} 