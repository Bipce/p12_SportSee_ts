import { IUserRequest } from "../models/User/IUserRequest.ts";
import { IUser } from "../models/User/IUser.ts";
import { IUserActivityRequest } from "../models/UserActivity/IUserActivityRequest.ts";
import { IUserActivitySession } from "../models/UserActivity/IUserActivitySession.ts";
import { IUserAverageSessionRequest } from "../models/UserAverageSession/IUserAverageSessionRequest.ts";
import { IUserAverageSession } from "../models/UserAverageSession/IUserAverageSession.ts";
import { IUserPerformance } from "../models/UserPerformance/IUserPerformance.ts";
import { IUserPerformanceRequest } from "../models/UserPerformance/IUserPerformanceRequest.ts";
import { IUserPerformanceData } from "../models/UserPerformance/IUserPerformanceData.ts";

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

export const userPerformanceRequestToDto = (request: IUserPerformanceRequest): IUserPerformance => {
  const data = request.data;
  const kind = data.kind;
  const dataArray = data.data;

  return {
    kind: {
      1: kind["1"],
      2: kind["2"],
      3: kind["3"],
      4: kind["4"],
      5: kind["5"],
      6: kind["6"],
    },
    data: dataArray.map<IUserPerformanceData>(x => ({
      value: x.value,
      kind: Object.values(kind)[x.kind - 1],
    })),
  };
};