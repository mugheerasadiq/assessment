import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { getRequest } from "../../utils/apiHelper";
import { cityURL, countryURL, stateURL, userURL } from "../../config/url";
import { Country } from "../signup/types";
import { UserTable } from "./table/table";
import { UserProvider } from "./context/userProvider";
import { useUserContext } from "./context/userContext";

const User = (): JSX.Element => {
  const { setCountries, setCities, setStates, fetchUsers } = useUserContext();

  const fetchCountries = async () => {
    try {
      const response = await getRequest(countryURL);
      const countries = response?.data.countries;
      if (countries) setCountries(countries);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchStates = async () => {
    try {
      const response = await getRequest(stateURL);
      const states = response?.data.states;
      if (states) setStates(states);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCities = async () => {
    try {
      const response = await getRequest(cityURL);
      const states = response?.data.cities;
      if (states) setCities(states);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCountries();
    fetchStates();
    fetchCities();
    fetchUsers()
  }, []);

  return (
    <div className={styles["container"]}>
      <UserTable />
    </div>
  );
};

export default User;
