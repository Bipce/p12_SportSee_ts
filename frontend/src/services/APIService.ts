import axios from "axios";
import { APIServiceBase } from "./APIServiceBase.ts";
import { IUser } from "../models/User/IUser.ts";
import { IUserActivity } from "../models/UserActivity/IUserActivity.ts";
import { IUserAverageSession } from "../models/UserAverageSession/IUserAverageSession.ts";
import { IUserData } from "../models/User/IUserData.ts";
import { IUserActivityData } from "../models/UserActivity/IUserActivityData.ts";
import { IUserAverageSessionData } from "../models/UserAverageSession/IUserAverageSessionData.ts";
import { userActivityData, userAverageSessionData, userMainData } from "../utils/contantes.ts";

export class APIService extends APIServiceBase {
  private readonly baseUrl = "http://localhost:3000";

  async getUserMainData(): Promise<IUserData> {
    const res = await axios.get<IUser>(`${this.baseUrl}/user/${this.userId}`);
    const user = res.data.data;

    return userMainData(user);
  }

  async getUserActivity(): Promise<IUserActivityData> {
    const res = await axios.get<IUserActivity>(`${this.baseUrl}/user/${this.userId}/activity`);
    const user = res.data.data;

    return userActivityData(user);
  }

  async getAverageSession(): Promise<IUserAverageSessionData> {
    const res = await axios.get<IUserAverageSession>(`${this.baseUrl}/user/${this.userId}/average-sessions`);
    const user = res.data.data;

    return userAverageSessionData(user);
  }
}