import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { getRequest } from "../../utils/apiHelper";
import { cityURL, countryURL, stateURL } from "../../config/url";
import { Country } from "../signup/types";
import { UserTable } from "./table/table";

const User = (): JSX.Element => {
  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);

  const fetchCountries = async () => {
    try {
      const response = await getRequest(countryURL);
      const countries = response?.data.countries;
      if (countries) setCountry(countries);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchStates = async () => {
    try {
      const response = await getRequest(stateURL);
      const states = response?.data.states;
      if (states) setState(states);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCities = async () => {
    try {
      const response = await getRequest(cityURL);
      const states = response?.data.cities;
      if (states) setCity(states);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCountries();
    fetchStates();
    fetchCities();
  }, []);

  return (
    <div className={styles["container"]}>
      <UserTable countries={country} states={state} cities={city} />
    </div>
  );
};

export default User;
