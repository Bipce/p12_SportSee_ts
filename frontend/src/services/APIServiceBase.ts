import { IUserActivity } from "../models/UserActivity/IUserActivity.ts";
import { IUser } from "../models/User/IUser.ts";
import { IUserAverageSession } from "../models/UserAverageSession/IUserAverageSession.ts";

export abstract class APIServiceBase {

  private readonly _userId: number;

  constructor(userId: number) {
    this._userId = userId;
  }

  protected get userId(): number {
    return this._userId;
  }

  abstract getUserMainData(): Promise<IUser>;

  abstract getUserActivity(): Promise<IUserActivity>;

  abstract getAverageSession(): Promise<IUserAverageSession>;
}