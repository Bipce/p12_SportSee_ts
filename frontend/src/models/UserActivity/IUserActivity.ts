import { ISession } from "./ISession.ts";

export interface IUserActivity {
  userId: number;
  sessions: ISession[];
}