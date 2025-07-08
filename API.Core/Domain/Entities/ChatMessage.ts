import { BaseEntity } from "../BaseEntity";
import { MessageRole, MessageType } from "../Enums";

export class ChatMessage extends BaseEntity {
  constructor(
    id: string,
    createdAt: Date,
    updatedAt: Date,
    public readonly sessionId: string,
    public readonly content: string,
    public readonly role: MessageRole,
    public readonly messageType: MessageType,
    public readonly relatedDataQuery?: string,
    public readonly tokenCount?: number
  ) {
    super(id, createdAt, updatedAt);
  }
} 