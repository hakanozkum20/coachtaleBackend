import { BaseEntity } from "../BaseEntity";

export class QueryCache extends BaseEntity {
  public readonly queryHash: string;
  public readonly userId: string;
  public readonly query: string;
  public readonly response: string;
  public readonly contextData?: string;
  public readonly hitCount: number;
  public readonly lastUsedAt: Date;

  constructor(
    id: string,
    createdAt: Date,
    updatedAt: Date,
    queryHash: string,
    userId: string,
    query: string,
    response: string,
    hitCount: number,
    lastUsedAt: Date,
    contextData?: string
  ) {
    super(id, createdAt, updatedAt);
    this.queryHash = queryHash;
    this.userId = userId;
    this.query = query;
    this.response = response;
    this.contextData = contextData;
    this.hitCount = hitCount;
    this.lastUsedAt = lastUsedAt;
  }
} 