import React, { createContext, useContext, useState } from "react";
import { UserContextType } from "./types";
import { User } from "../types";
import { City, Country, State } from "../../signup/types";

const UserContext = createContext<UserContextType | undefined>(undefined);

export function useUserContext() {
  return useContext(UserContext);
}

type UserProviderProps = {
    children: React.ReactNode;
};

export function UserProvider({ children }: UserProviderProps): React.ReactElement {
    const [users, setUsers] = useState<User[]>([]);
    const [countries, setCountries] = useState<Country[]>([]);
    const [states, setStates] = useState<State[]>([]);
    const [cities, setCities] = useState<City[]>([]);
  
    return (
      <UserContext.Provider
        value={{
          users,
          setUsers,
          countries,
          setCountries,
          states,
          setStates,
          cities,
          setCities,
        }}
      >
        {children}
      </UserContext.Provider>
    );
  }