import axios from "axios";
import IUserHome from "../models/User/IUserHome.ts";

export const getUsersMainData = async (): Promise<IUserHome[]> => {
  const instance = axios.create({
    baseURL: "/data",
  });

  const res = await instance.get<IUserHome[]>("/usersMainData.json");
  return res.data;
};