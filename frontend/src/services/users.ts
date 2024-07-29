import axios from "axios";
import IUserHome from "../models/User/IUserHome.ts";

export const getUsersMainData = async (): Promise<IUserHome[]> => {
  const res = await axios.get<IUserHome[]>("/data/usersMainData.json");
  return res.data;
};