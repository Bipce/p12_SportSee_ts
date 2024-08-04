import { IUserData } from "../models/User/IUserData.ts";
import { IUserActivityData } from "../models/UserActivity/IUserActivityData.ts";
import { IUserAverageSessionData } from "../models/UserAverageSession/IUserAverageSessionData.ts";

export const userMainData = (user: IUserData): IUserData => {
  return {
    id: user.id,
    userInfos: {
      firstName: user.userInfos.firstName,
      lastName: user.userInfos.lastName,
      age: user.userInfos.age,
    },
    todayScore: user.todayScore,
    keyData: {
      calorieCount: user.keyData.calorieCount,
      proteinCount: user.keyData.proteinCount,
      carbohydrateCount: user.keyData.carbohydrateCount,
      lipidCount: user.keyData.lipidCount,
    },
  };
};

export const userActivityData = (user: IUserActivityData): IUserActivityData => {
  return {
    userId: user.userId,
    sessions: user.sessions,
  };
};

export const userAverageSessionData = (user: IUserAverageSessionData): IUserAverageSessionData => {
  return {
    userId: user.userId,
    sessions: user.sessions,
  };
};

