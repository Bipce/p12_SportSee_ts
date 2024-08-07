import { IUserPerformanceData } from "./IUserPerformanceData.ts";

export interface IUserPerformance {
  kind: {
    1: string,
    2: string,
    3: string,
    4: string,
    5: string,
    6: string,
  };
  data: IUserPerformanceData[];
}