import { BaseEntity } from "../BaseEntity";
import { PlanType } from "../Enums";

export class Plan extends BaseEntity {
  constructor(
    id: string,
    createdAt: Date,
    updatedAt: Date,
    public readonly name: string,
    public readonly type: PlanType,
    public readonly price: number,
    public readonly currency: string,
    public readonly duration: number, // gün cinsinden
    public readonly isActive: boolean,
    public readonly description: string
  ) {
    super(id, createdAt, updatedAt);
  }
} 