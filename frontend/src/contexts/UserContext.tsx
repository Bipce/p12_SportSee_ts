import React, { createContext, useEffect, useState } from "react";
import { getUserMainData } from "../services/apiCallMock.ts";
import { IUser } from "../models/User/IUser.ts";


interface IProps {
  changeIsMock: () => void;
  isMock: boolean;
  user: IUser;
}

export const UserContext = createContext<IProps>({} as IProps);

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMock, setIsMock] = useState(false);
  const [user, setUser] = useState<IUser>();


  const loadUser = async (id: number) => {
    setUser(await getUserMainData(id, isMock));
  };

  const changeIsMock = () => {
    setIsMock((prev) => !prev);
  };

  return <UserContext.Provider value={{ isMock, changeIsMock, user }}>{children}</UserContext.Provider>;
};