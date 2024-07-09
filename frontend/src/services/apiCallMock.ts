import axios from "axios";
import { IUser } from "../models/User/IUser.ts";
import { IUserInfos } from "../models/User/IUserInfos.ts";

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

export const getUsersInfos = async (id: number): Promise<IUserInfos> => {
  const user = await getUserMainData(id);
  return user.userInfos;
};