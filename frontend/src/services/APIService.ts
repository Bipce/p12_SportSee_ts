import axios from "axios";
import { APIServiceBase } from "./APIServiceBase.ts";
import { IUserRequest } from "../models/User/IUserRequest.ts";
import { IUserActivityRequest } from "../models/UserActivity/IUserActivityRequest.ts";
import { IUserAverageSessionRequest } from "../models/UserAverageSession/IUserAverageSessionRequest.ts";
import { IUserPerformanceRequest } from "../models/UserPerformance/IUserPerformanceRequest.ts";

export class APIService extends APIServiceBase {
  async getUserMainData(): Promise<IUserRequest> {
    const res = await axios.get<IUserRequest>(`/user/${this.userId}`);
    return res.data;
  }

  async getUserActivity(): Promise<IUserActivityRequest> {
    const res = await axios.get<IUserActivityRequest>(`/user/${this.userId}/activity`);
    return res.data;
  }

  async getAverageSession(): Promise<IUserAverageSessionRequest> {
    const res = await axios.get<IUserAverageSessionRequest>(`/user/${this.userId}/average-sessions`);
    return res.data;
  }

  async getPerformance(): Promise<IUserPerformanceRequest> {
    const res = await axios.get<IUserPerformanceRequest>(`/user/${this.userId}/performance`);
    return res.data;
  }
}