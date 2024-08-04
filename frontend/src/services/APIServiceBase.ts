import { IUserData } from "../models/User/IUserData.ts";
import { IUserActivityData } from "../models/UserActivity/IUserActivityData.ts";
import { IUserAverageSessionData } from "../models/UserAverageSession/IUserAverageSessionData.ts";

export abstract class APIServiceBase {

  private readonly _userId: number;

  constructor(userId: number) {
    this._userId = userId;
  }

  protected get userId(): number {
    return this._userId;
  }

  abstract getUserMainData(): Promise<IUserData>;

  abstract getUserActivity(): Promise<IUserActivityData>;

  abstract getAverageSession(): Promise<IUserAverageSessionData>;
}