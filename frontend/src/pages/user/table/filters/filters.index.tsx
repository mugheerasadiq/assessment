import React from "react";
import { useUserContext } from "../../context/userContext";
import styles from "../../styles.module.css";
import { Button, Select } from "antd";
import { useLoaderContext } from "../../../../context/loader/context";

export const Filters = () => {
  const { cities, states, countries, filters, setFilters } = useUserContext();
  const { setLoading } = useLoaderContext();

  const handleCountryChange = (value: any, option: any) => {
    const data = { ...filters };
    setLoading(true);
    if (value && option.id) {
      data.countryID = option.id;
      data.countryName = value;
    } else {
      data.countryID = "";
      data.countryName = "";
    }

    setFilters(data);
  };

  const handleStateChange = (value: any, option: any) => {
    const data = { ...filters };
    setLoading(true);
    if (value && option.id) {
      data.stateID = option.id;
      data.stateName = value;
    } else {
      data.stateID = "";
      data.stateName = "";
    }
    setFilters(data);
  };

  const handleCityChange = (value: any, option: any) => {
    const data = { ...filters };
    setLoading(true);

    if (value && option.id) {
      data.cityID = option.id;
      data.cityName = value;
    } else {
      data.cityID = "";
      data.cityName = "";
    }

    setFilters(data);
  };

  const handleResetFilter = () => {
    setLoading(true);
    setFilters({ city: "", country: "", state: "" });
  };

  return (
    <div className={styles["filter-container"]}>
      <Select
        allowClear
        showSearch
        style={{ width: "300px" }}
        placeholder="Country Filter"
        value={filters.countryName}
        onChange={handleCountryChange}
        options={countries.map((country: any) => ({
          label: country.Name,
          value: country.Name,
          id: country.ID,
        }))}
        virtual
        className={styles["filter-box"]}
      />

      <Select
        showSearch
        allowClear
        style={{ width: "300px" }}
        placeholder="State Filter"
        value={filters.stateName}
        onChange={handleStateChange}
        options={states.map((state: any) => ({
          label: state.Name,
          value: state.Name,
          id: state.ID,
        }))}
        virtual
        className={styles["filter-box"]}
      />

      <Select
        allowClear
        showSearch
        style={{ width: "300px" }}
        placeholder="City Filter"
        value={filters.cityName}
        onChange={handleCityChange}
        options={cities.map((city: any) => ({
          label: city.Name,
          value: city.Name,
          id: city.ID,
        }))}
        virtual
        className={styles["filter-box"]}
      />

      <Button type="primary" onClick={handleResetFilter}>
        Reset Filters
      </Button>
    </div>
  );
};
