import React, { createContext, useContext, useState } from "react";
import { UserContextType } from "./types";

export const UserContext = createContext<UserContextType | undefined>(undefined);

export function useUserContext() : any{
  return useContext(UserContext);
}
