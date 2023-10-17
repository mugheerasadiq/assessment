import { useEffect, useState } from "react";
import { User } from "../types";
import { City, Country, State } from "../../signup/types";
import { UserContext } from "./userContext";
import { getRequest } from "../../../utils/apiHelper";
import { userURL } from "../../../config/url";
import { useLoaderContext } from "../../../context/loader/context";

type UserProviderProps = {
  children: React.ReactNode;
};

export function UserProvider({
  children,
}: UserProviderProps): React.ReactElement {
  const [users, setUsers] = useState<User[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);
  const [states, setStates] = useState<State[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [filters, setFilters] = useState({
    cityID: "",
    cityName: "",
    countryID: "",
    countryName: "",
    stateID: "",
    stateName: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState({
    sortField: "ID",
    sortOrder: "asc",
  });
  const [totalRecords, setTotalRecords] = useState(0);

  const { setLoading } = useLoaderContext();

  const userParams = () => {
    return {
      city: filters.cityID,
      country: filters.countryID,
      state: filters.stateID,
      skip: (currentPage - 1) * 5,
      limit: 5,
      sortField: sort.sortField,
      sortOrder: sort.sortOrder,
    };
  };

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = (await getRequest(userURL, userParams())).data;
      const users = response?.data.users;
      const total = response?.data.totalCount;
      setTotalRecords(total);
      setUsers(users);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers()
    console.log(filters);
  }, [filters, sort, currentPage])

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
        filters,
        setFilters,
        currentPage,
        setCurrentPage,
        sort,
        setSort,
        fetchUsers,
        totalRecords,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
