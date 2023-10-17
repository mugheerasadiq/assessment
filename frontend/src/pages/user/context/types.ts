import { Country, State, City } from "../../signup/types";
import { User } from "../types";

export type UserContextType = {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  countries: Country[];
  setCountries: React.Dispatch<React.SetStateAction<Country[]>>;
  states: State[];
  setStates: React.Dispatch<React.SetStateAction<State[]>>;
  cities: City[];
  setCities: React.Dispatch<React.SetStateAction<City[]>>;
  setSort: any;
  sort: any;
  filters: any;
  setFilters: any;
  currentPage: any;
  setCurrentPage: any;
  fetchUsers: any,
  totalRecords: number
};
