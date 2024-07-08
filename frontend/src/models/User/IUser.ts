import { IUserInfos } from "./IUserInfos.ts";
import { IUserKeyData } from "./IUserKeyData.ts";

export interface IUser {
  id: number;
  keyData: IUserKeyData;
  todayScore: number;
  userInfos: IUserInfos;
}