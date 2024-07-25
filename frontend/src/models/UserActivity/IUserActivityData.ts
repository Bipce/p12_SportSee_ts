import { ISession } from "./ISession.ts";

export interface IUserActivityData {
  userId: number;
  sessions: ISession[];
}