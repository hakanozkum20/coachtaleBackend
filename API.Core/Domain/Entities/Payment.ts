import { BaseEntity } from "../BaseEntity";
import { PaymentMethod, PaymentStatus } from "../Enums";

export class Payment extends BaseEntity {
  public readonly userId: string;
  public readonly subscriptionId: string;
  public readonly amount: number;
  public readonly currency: string;
  public readonly paymentMethod: PaymentMethod;
  public readonly status: PaymentStatus;
  public readonly transactionId?: string;
  public readonly gatewayResponse?: string;
  public readonly processedAt?: Date;

  constructor(
    id: string,
    createdAt: Date,
    updatedAt: Date,
    userId: string,
    subscriptionId: string,
    amount: number,
    currency: string,
    paymentMethod: PaymentMethod,
    status: PaymentStatus,
    transactionId?: string,
    gatewayResponse?: string,
    processedAt?: Date
  ) {
    super(id, createdAt, updatedAt);
    this.userId = userId;
    this.subscriptionId = subscriptionId;
    this.amount = amount;
    this.currency = currency;
    this.paymentMethod = paymentMethod;
    this.status = status;
    this.transactionId = transactionId;
    this.gatewayResponse = gatewayResponse;
    this.processedAt = processedAt;
  }
} 