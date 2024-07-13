import axios from "axios";
import { IUser } from "../models/User/IUser.ts";
import { IUserActivity } from "../models/UserActivity/IUserActivity.ts";
import { IUserAverageSession } from "../models/UserAverageSession/IUserAverageSession.ts";

export const getUsersMainData = async (): Promise<IUser[]> => {
  const res = await axios.get<IUser[]>("/data/userMainData.json");
  return res.data;
};

export const getUserMainData = async (id: number): Promise<IUser> => {
  const users = await getUsersMainData();
  const user = users.find(x => x.id === id);

  if (!user) {
    throw new Error("User not found");
  }
  return user;
};

export const getUserActivity = async (id: number): Promise<IUserActivity> => {
  const usersActivity = await axios.get<IUserActivity[]>("/data/userActivity.json");
  const userActivity = usersActivity.data.find(x => x.userId === id);

  if (!userActivity) {
    throw new Error("UserActivity not found");
  }

  return userActivity;
};

export const getUserAverageSession = async (id: number): Promise<IUserAverageSession> => {
  const usersAverageSession = await axios.get<IUserAverageSession[]>("/data/userAverageSession.json");
  const userAverageSession = usersAverageSession.data.find(x => x.userId === id);

  if (!userAverageSession) {
    throw new Error("UserAverageSession not found");
  }

  return userAverageSession;
};