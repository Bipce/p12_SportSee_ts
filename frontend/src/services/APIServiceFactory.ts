import { APIServiceBase } from "./APIServiceBase.ts";
import { MockAPIService } from "./MockAPIService.ts";
import { APIService } from "./APIService.ts";

export class APIServiceFactory {
  private readonly isMock: boolean;

  constructor(isMock: boolean) {
    this.isMock = isMock;
  }

  get(userId: number): APIServiceBase {
    if (userId != 12 && userId != 18) {
      throw new Error("User not found");
    }

    if (this.isMock) {
      return new MockAPIService(userId);
    }

    return new APIService(userId);
  }
}