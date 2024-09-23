import { IUserRequest } from "../models/User/IUserRequest.ts";
import { IUserActivityRequest } from "../models/UserActivity/IUserActivityRequest.ts";
import { IUserAverageSessionRequest } from "../models/UserAverageSession/IUserAverageSessionRequest.ts";
import { IUserPerformanceRequest } from "../models/UserPerformance/IUserPerformanceRequest.ts";

export abstract class APIServiceBase {
  private readonly _userId: number;

  constructor(userId: number) {
    this._userId = userId;
  }

  protected get userId(): number {
    return this._userId;
  }

  abstract getUserMainData(): Promise<IUserRequest>;

  abstract getUserActivity(): Promise<IUserActivityRequest>;

  abstract getAverageSession(): Promise<IUserAverageSessionRequest>;

  abstract getPerformance(): Promise<IUserPerformanceRequest>
}