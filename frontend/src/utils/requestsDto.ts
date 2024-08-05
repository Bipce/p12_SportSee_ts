import { IUserRequest } from "../models/User/IUserRequest.ts";
import { IUser } from "../models/User/IUser.ts";
import { IUserActivityRequest } from "../models/UserActivity/IUserActivityRequest.ts";
import { IUserActivitySession } from "../models/UserActivity/IUserActivitySession.ts";
import { IUserAverageSessionRequest } from "../models/UserAverageSession/IUserAverageSessionRequest.ts";
import { IUserAverageSession } from "../models/UserAverageSession/IUserAverageSession.ts";

export const userRequestToDto = (request: IUserRequest): IUser => {
  const data = request.data;
  const keyData = data.keyData;
  const userInfos = data.userInfos;

  return {
    keyData: {
      calorieCount: keyData.calorieCount,
      carbohydrateCount: keyData.carbohydrateCount,
      lipidCount: keyData.lipidCount,
      proteinCount: keyData.proteinCount,
    },
    todayScore: data.todayScore,
    score: data.score,
    userInfos: {
      age: userInfos.age,
      firstName: userInfos.firstName,
      lastName: userInfos.lastName,
    },
  };
};

export const userActivityRequestToDto = (request: IUserActivityRequest): IUserActivitySession[] => {
  const data = request.data;
  const sessions = data.sessions;

  return sessions.map<IUserActivitySession>(x => ({
    day: x.day,
    kilogram: x.kilogram,
    calories: x.calories,
  }));
};

export const userAverageSessionRequestToDto = (request: IUserAverageSessionRequest): IUserAverageSession[] => {
  const data = request.data;
  const sessions = data.sessions;

  return sessions.map<IUserAverageSession>(x => ({
    day: x.day,
    sessionLength: x.sessionLength,
  }));
};