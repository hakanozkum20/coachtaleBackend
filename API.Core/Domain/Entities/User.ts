import { BaseEntity } from "../BaseEntity";
import { ExamType } from "./ExamType";

export class User extends BaseEntity {
  

  constructor(
    id: string,
    createdAt: Date,
    updatedAt: Date,
    public readonly email: string,
    public readonly username: string,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly passwordHash: string,
    public readonly isActive: boolean,
    public readonly targetExams: ExamType,
    public readonly subscriptionId?: string,
    public readonly characterTypeId?: string,
    public readonly lastLoginAt?: Date,
    public readonly profilePicture?: string,
    public readonly phone?: string,
    public readonly dateOfBirth?: Date,
    public readonly studyGoals?: string,
    public readonly preferredStudyTime?: string,
    public readonly currentGrade?: number,
  ) {
    super(id, createdAt, updatedAt);
    this.email = email;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.passwordHash = passwordHash;
    this.isActive = isActive;
    this.targetExams = targetExams;
    this.subscriptionId = subscriptionId;
    this.characterTypeId = characterTypeId;
    this.lastLoginAt = lastLoginAt;
    this.profilePicture = profilePicture;
    this.phone = phone;
    this.dateOfBirth = dateOfBirth;
    this.studyGoals = studyGoals;
    this.preferredStudyTime = preferredStudyTime;
    this.currentGrade = currentGrade;
  }
} 