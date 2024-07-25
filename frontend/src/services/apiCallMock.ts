import axios from "axios";
import { IUser } from "../models/User/IUser.ts";
import { IUserActivity } from "../models/UserActivity/IUserActivity.ts";
import { IUserAverageSession } from "../models/UserAverageSession/IUserAverageSession.ts";
import IUserHome from "../models/User/IUserHome.ts";

export const getUsersMainData = async (): Promise<IUserHome[]> => {
  const res = await axios.get<IUserHome[]>("/data/usersMainData.json");
  return res.data;
};

export const getUserMainData = async (id: number, isMock: boolean): Promise<IUser> => {
  if (id != 12 && id != 18) {
    throw new Error("User not found");
  }

  const url = isMock ? `/data/${id}/mainData.json` : `http://localhost:3000/user/${id}`;
  const res = await axios.get<IUser>(url);

  return res.data;
};

export const getUserActivity = async (id: number, isMock: boolean): Promise<IUserActivity> => {
  if (id != 12 && id != 18) {
    throw new Error("UserActivity not found");
  }

  const url = isMock ? `/data/${id}/activity.json` : `http://localhost:3000/user/${id}/activity`;
  const res = await axios.get<IUserActivity>(url);

  return res.data;
};

export const getUserAverageSession = async (id: number, isMock: boolean): Promise<IUserAverageSession> => {
  if (id != 12 && id != 18) {
    throw new Error("UserAverageSession not found");
  }

  const url = isMock ? `/data/${id}/averageSession.json` : `http://localhost:3000/user/${id}/average-sessions`;
  const res = await axios.get<IUserAverageSession>(url);

  return res.data;
};