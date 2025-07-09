import { BaseEntity } from "../BaseEntity";
import { PaymentMethod, PaymentStatus } from "../Enums";

export class Payment extends BaseEntity {
  constructor(
    id: string,
    createdAt: Date,
    updatedAt: Date,
    public readonly userId: string,
    public readonly subscriptionId: string,
    public readonly amount: number,
    public readonly currency: string,
    public readonly paymentMethod: PaymentMethod,
    public readonly status: PaymentStatus,
    public readonly transactionId?: string,
    public readonly gatewayResponse?: string,
    public readonly processedAt?: Date
  ) {
    super(id, createdAt, updatedAt);
  }
} 