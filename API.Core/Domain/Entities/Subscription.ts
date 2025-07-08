import { BaseEntity } from "../BaseEntity";
import { PlanType, PaymentMethod } from "../Enums";

export class Subscription extends BaseEntity {
  constructor(
    id: string,
    createdAt: Date,
    updatedAt: Date,
    public readonly userId: string,
    public readonly planType: PlanType,
    public readonly startDate: Date,
    public readonly endDate: Date,
    public readonly isActive: boolean,
    public readonly autoRenewal: boolean,
    public readonly paymentMethod: PaymentMethod,
    public readonly amount: number,
    public readonly currency: string,
    public readonly cancelledAt?: Date,
    public readonly cancellationReason?: string
  ) {
    super(id, createdAt, updatedAt);
  }
} 