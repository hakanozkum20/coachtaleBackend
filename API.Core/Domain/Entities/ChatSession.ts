import { BaseEntity } from "../BaseEntity";

export class ChatSession extends BaseEntity {
  constructor(
    id: string,
    createdAt: Date,
    updatedAt: Date,
    public readonly userId: string,
    public readonly title: string,
    public readonly isActive: boolean,
    public readonly totalMessages: number,
    public readonly lastMessageAt?: Date
  ) {
    super(id, createdAt, updatedAt);
  }
} 