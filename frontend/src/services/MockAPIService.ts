import axios from "axios";
import { APIServiceBase } from "./APIServiceBase.ts";
import { IUserRequest } from "../models/User/IUserRequest.ts";
import { IUserActivityRequest } from "../models/UserActivity/IUserActivityRequest.ts";
import { IUserAverageSessionRequest } from "../models/UserAverageSession/IUserAverageSessionRequest.ts";
import { IUserPerformanceRequest } from "../models/UserPerformance/IUserPerformanceRequest.ts";

export class MockAPIService extends APIServiceBase {
  async getUserMainData(): Promise<IUserRequest> {
    const res = await axios.get<IUserRequest>(`/${this.userId}/mainData.json`);
    return res.data;
  }

  async getUserActivity(): Promise<IUserActivityRequest> {
    const res = await axios.get<IUserActivityRequest>(`/${this.userId}/activity.json`);
    return res.data;
  }

  async getAverageSession(): Promise<IUserAverageSessionRequest> {
    const res = await axios.get<IUserAverageSessionRequest>(`/${this.userId}/averageSession.json`);
    return res.data;
  }

  async getPerformance(): Promise<IUserPerformanceRequest> {
    const res = await axios.get<IUserPerformanceRequest>(`${this.userId}/performance`);
    return res.data;
  }
}