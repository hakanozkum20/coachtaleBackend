import { BaseEntity } from "../BaseEntity";

export class QueryCache extends BaseEntity {
  constructor(
    id: string,
    createdAt: Date,
    updatedAt: Date,
    public readonly queryHash: string,
    public readonly userId: string,
    public readonly query: string,
    public readonly response: string,
    public readonly hitCount: number,
    public readonly lastUsedAt: Date,
    public readonly contextData?: string
  ) {
    super(id, createdAt, updatedAt);
  }
} 