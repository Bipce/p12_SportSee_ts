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
  let res;

  if (id === 12 || id === 18 && isMock) {
    res = await axios.get<IUser>(`/data/${id}/mainData.json`);
  } else if (id === 12 || id === 18 && !isMock) {
    res = await axios.get<IUser>(`http://localhost:3000/user/${id}`);
  }

  if (!res) {
    throw new Error("User not found");
  }

  return res.data;
};

export const getUserActivity = async (id: number): Promise<IUserActivity> => {
  let res;

  if (id === 12 || id === 18) {
    res = await axios.get<IUserActivity>(`/data/${id}/activity.json`);
  }

  if (!res) {
    throw new Error("UserActivity not found");
  }

  return res.data;
};

export const getUserAverageSession = async (id: number): Promise<IUserAverageSession> => {
  let res;

  if (id === 12 || id === 18) {
    res = await axios.get<IUserAverageSession>(`/data/${id}/averageSession.json`);
  }

  if (!res) {
    throw new Error("UserAverageSession not found");
  }

  return res.data;
};