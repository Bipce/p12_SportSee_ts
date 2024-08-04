import axios from "axios";
import { APIServiceBase } from "./APIServiceBase.ts";
import { IUser } from "../models/User/IUser.ts";
import { IUserActivity } from "../models/UserActivity/IUserActivity.ts";
import { IUserAverageSession } from "../models/UserAverageSession/IUserAverageSession.ts";
import { IUserData } from "../models/User/IUserData.ts";
import { IUserActivityData } from "../models/UserActivity/IUserActivityData.ts";
import { IUserAverageSessionData } from "../models/UserAverageSession/IUserAverageSessionData.ts";
import { userActivityData, userAverageSessionData, userMainData } from "../utils/contantes.ts";

export class MockAPIService extends APIServiceBase {
  async getUserMainData(): Promise<IUserData> {
    const res = await axios.get<IUser>(`/data/${this.userId}/mainData.json`);
    const user = res.data.data;

    return userMainData(user);
  }

  async getUserActivity(): Promise<IUserActivityData> {
    const res = await axios.get<IUserActivity>(`/data/${this.userId}/activity.json`);
    const user = res.data.data;

    return userActivityData(user);
  }

  async getAverageSession(): Promise<IUserAverageSessionData> {
    const res = await axios.get<IUserAverageSession>(`/data/${this.userId}/averageSession.json`);
    const user = res.data.data;

    return userAverageSessionData(user);
  }
}