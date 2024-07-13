import { IAverageSession } from "./IAverageSession.ts";

export interface IUserAverageSession {
  userId: number;
  sessions: IAverageSession[];
}