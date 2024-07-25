import React, { createContext, useState } from "react";
import { getUserActivity, getUserAverageSession, getUserMainData } from "../services/apiCallMock.ts";
import { IUser } from "../models/User/IUser.ts";
import { IUserActivity } from "../models/UserActivity/IUserActivity.ts";
import { IUserAverageSession } from "../models/UserAverageSession/IUserAverageSession.ts";


interface IProps {
  changeIsMock: () => void;
  loadUser: (id: number) => Promise<void>;
  user?: IUser;
  userActivity?: IUserActivity;
  userAverageSession?: IUserAverageSession;
}

export const UserContext = createContext<IProps>({} as IProps);

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMock, setIsMock] = useState(false);
  const [user, setUser] = useState<IUser>();
  const [userActivity, setUserActivity] = useState<IUserActivity>();
  const [userAverageSession, setUserAverageSession] = useState<IUserAverageSession>();


  const loadUser = async (id: number) => {
    setUser(await getUserMainData(id, isMock));
    setUserActivity(await getUserActivity(id, isMock));
    setUserAverageSession(await getUserAverageSession(id, isMock));
  };

  const changeIsMock = () => {
    setIsMock((prev) => !prev);
  };


  return <UserContext.Provider
    value={{
      changeIsMock, loadUser, user, userActivity, userAverageSession,
    }}>{children}</UserContext.Provider>;
};