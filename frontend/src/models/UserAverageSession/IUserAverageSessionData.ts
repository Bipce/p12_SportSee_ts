import { IAverageSession } from "./IAverageSession.ts";

export interface IUserAverageSessionData {
  userId: number;
  sessions: IAverageSession[];
}