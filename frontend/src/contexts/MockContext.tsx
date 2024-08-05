import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

interface IProps {
  changeIsMock: () => void;
  isMock: boolean;
}

export const MockContext = createContext<IProps>({} as IProps);

export const MockProviderContext = ({ children }: { children: React.ReactNode }) => {
  const [isMock, setIsMock] = useState<boolean | undefined>();
  const [isCheck, setIsCheck] = useState(false);
  const IS_MOCK_KEY = "isMock";

  useEffect(() => {
    const value = localStorage.getItem(IS_MOCK_KEY);
    setIsMock(value == "true");
  }, []);

  useEffect(() => {
    if (isMock == undefined) return;
    axios.defaults.baseURL = isMock ? "/data" : "http://localhost:3000";
    if (!isCheck) {
      setIsCheck(true);
    }
  }, [isMock]);

  const changeIsMock = () => {
    setIsMock((prev) => {
      const newValue = !prev;
      localStorage.setItem(IS_MOCK_KEY, newValue.toString());
      return newValue;
    });
  };

  if (isMock === undefined) return null;

  return <MockContext.Provider value={{ changeIsMock, isMock }}>{isCheck && children}</MockContext.Provider>;
};