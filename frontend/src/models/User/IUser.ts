export interface IUser {
  keyData: {
    calorieCount: number;
    carbohydrateCount: number;
    lipidCount: number;
    proteinCount: number;
  };
  todayScore?: number;
  score?: number;
  userInfos: {
    age: number;
    firstName: string;
    lastName: string;
  };
}