import React, { createContext, useEffect, useState } from "react";
import { IUser } from "../models/User/IUser.ts";
import { getUserMainData } from "../services/apiCallMock.ts";
import { useParams } from "react-router-dom";

interface IProps {
  user: IUser;
}

export const UserContext = createContext<IProps>({} as IProps);

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const { id } = useParams<{ id: string }>();

  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    (async () => {
      if (typeof id === "string") {
        setUser(await getUserMainData(parseInt(id)));
      }
    })();
  }, [id]);

  // if (!user) return null;

  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};