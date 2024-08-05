export interface IUserAverageSessionRequest {
  data: {
    userId: number;
    sessions: {
      day: number;
      sessionLength: number;
    }[]
  };
}