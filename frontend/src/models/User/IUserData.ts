import { IUserKeyData } from "./IUserKeyData.ts";
import { IUserInfos } from "./IUserInfos.ts";

export interface IUserData {
  id: number;
  keyData: IUserKeyData;
  todayScore: number;
  userInfos: IUserInfos;
}