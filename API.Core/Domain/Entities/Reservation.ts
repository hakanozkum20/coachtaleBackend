import { BaseEntity } from "../BaseEntity";

export class Reservation extends BaseEntity {
  constructor(
    id: string,
    createdAt: Date,
    updatedAt: Date,
    public readonly companyId: string,
    public readonly authorizedUserId: string,
    public readonly contractNumber: string,
    public readonly reservationDate: Date,
    public readonly programType: string,
    public readonly customerFullName: string,
    public readonly customerTc: string,
    public readonly customerPhone: string,
    public readonly customerEmail: string,
    public readonly groomFullName: string,
    public readonly groomPhone: string,
    public readonly brideFullName: string,
    public readonly bridePhone: string,
    public readonly address: string,
    public readonly status: string,
    public readonly guestCount: number,
    public readonly pricePerPerson: number,
    public readonly totalPrice: number,
    public readonly discount: number,
    public readonly vatRate: number,
    public readonly vatAmount: number,
    public readonly grandTotal: number,
    public readonly source: string,
    public readonly referrer: string,
    public readonly notes: string,
    public readonly specialRequests: string,
    public readonly contractDocument: string,
    public readonly foodMenu: string,
    public readonly reminderForRehearsal: boolean,
    public readonly reminderForPhotos: boolean,
    public readonly deliveredPhotoVideo: boolean
  ) {
    super(id, createdAt, updatedAt);
  }
}

    