import axios from "axios";
import { IUser } from "../models/User/IUser.ts";
import { IUserActivity } from "../models/UserActivity/IUserActivity.ts";
import { IUserAverageSession } from "../models/UserAverageSession/IUserAverageSession.ts";

export const getUsersMainData = async (): Promise<IUser[]> => {
  const res = await axios.get<IUser[]>("/data/usersMainData.json");
  return res.data;
};

export const getUserMainData = async (id: number): Promise<IUser> => {
  let res;

  if (id === 12) {
    res = await axios.get<IUser>("/data/karl/mainData.json");
  } else if (id === 18) {
    res = await axios.get<IUser>("/data/cecilia/mainData.json");
  }

  if (!res) {
    throw new Error("User not found");
  }
  return res.data;
};

export const getUserActivity = async (id: number): Promise<IUserActivity> => {
  let res;

  if (id === 12) {
    res = await axios.get<IUserActivity>("/data/karl/activity.json");
  } else if (id === 18) {
    res = await axios.get<IUserActivity>("/data/cecilia/activity.json");
  }

  if (!res) {
    throw new Error("UserActivity not found");
  }

  return res.data;
};

export const getUserAverageSession = async (id: number): Promise<IUserAverageSession> => {
  let res;

  if (id === 12) {
    res = await axios.get<IUserAverageSession>("/data/karl/averageSession.json");
  } else if (id === 18) {
    res = await axios.get<IUserAverageSession>("/data/cecilia/averageSession.json");
  }

  if (!res) {
    throw new Error("UserAverageSession not found");
  }

  return res.data;
};