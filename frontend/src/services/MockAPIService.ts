import { APIServiceBase } from "./APIServiceBase.ts";
import axios from "axios";
import { IUserActivity } from "../models/UserActivity/IUserActivity.ts";
import { IUser } from "../models/User/IUser.ts";
import { IUserAverageSession } from "../models/UserAverageSession/IUserAverageSession.ts";

export class MockAPIService extends APIServiceBase {
  async getUserMainData(): Promise<IUser> {
    const res = await axios.get<IUser>(`/data/${this.userId}/mainData.json`);
    return res.data;
  }

  async getUserActivity(): Promise<IUserActivity> {
    const res = await axios.get<IUserActivity>(`/data/${this.userId}/activity.json`);
    return res.data;
  }

  async getAverageSession(): Promise<IUserAverageSession> {
    const res = await axios.get<IUserAverageSession>(`/data/${this.userId}/averageSession.json`);
    return res.data;
  }
}