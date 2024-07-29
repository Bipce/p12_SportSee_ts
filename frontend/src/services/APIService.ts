import axios from "axios";
import { IUserActivity } from "../models/UserActivity/IUserActivity.ts";
import { APIServiceBase } from "./APIServiceBase.ts";
import { IUser } from "../models/User/IUser.ts";
import { IUserAverageSession } from "../models/UserAverageSession/IUserAverageSession.ts";

export class APIService extends APIServiceBase {
  private readonly baseUrl = "http://localhost:3000";

  async getUserMainData(): Promise<IUser> {
    const res = await axios.get<IUser>(`${this.baseUrl}/user/${this.userId}`);
    return res.data;
  }

  async getUserActivity(): Promise<IUserActivity> {
    const res = await axios.get<IUserActivity>(`${this.baseUrl}/user/${this.userId}/activity`);
    return res.data;
  }

  async getAverageSession(): Promise<IUserAverageSession> {
    const res = await axios.get<IUserAverageSession>(`${this.baseUrl}/user/${this.userId}/average-sessions`);
    return res.data;
  }
}