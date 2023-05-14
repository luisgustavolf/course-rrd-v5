import React from "react";
import { IAuthContextValues } from "./iAuthContextValues";

export const AuthContext = React.createContext<IAuthContextValues>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {}
})