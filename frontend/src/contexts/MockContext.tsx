import React, { createContext, useState } from "react";

interface IProps {
  changeIsMock: () => void;
  isMock: boolean;
}

export const MockContext = createContext<IProps>({} as IProps);

export const MockProviderContext = ({ children }: { children: React.ReactNode }) => {
  const [isMock, setIsMock] = useState(false);

  const changeIsMock = () => {
    setIsMock((prev) => !prev);
  };

  return <MockContext.Provider value={{ changeIsMock, isMock }}>{children}</MockContext.Provider>;
};