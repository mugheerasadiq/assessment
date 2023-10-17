import React, { useState } from "react";
import { userTableColumns } from "./columns";
import { Table, Select, Button } from "antd";
import styles from "../styles.module.css";

export const UserTable = ({ countries, states, cities }: any) => {
  const [columns, setColumns] = useState(userTableColumns);

  const handleChange = () => {};

  return (
    <div className={styles["table-container"]}>
      <div className={styles["filter-container"]}>
        <Select
          mode="multiple"
          allowClear
          style={{ width: "300px" }}
          placeholder="Country Filter"
          onChange={handleChange}
          options={countries.map((country: any) => ({
            label: country.Name,
            value: country.ID,
          }))}
          virtual
          maxTagCount="responsive"
          className={styles["filter-box"]}
        />

        <Select
          mode="multiple"
          allowClear
          style={{ width: "300px" }}
          placeholder="State Filter"
          onChange={handleChange}
          options={states.map((state: any) => ({
            label: state.Name,
            value: state.ID,
          }))}
          virtual
          maxTagCount="responsive"
          className={styles["filter-box"]}
        />

        <Select
          mode="multiple"
          allowClear
          style={{ width: "300px" }}
          placeholder="City Filter"
          onChange={handleChange}
          options={cities.map((city: any) => ({
            label: city.Name,
            value: city.ID,
          }))}
          virtual
          maxTagCount="responsive"
          className={styles["filter-box"]}
        />

        <Button type="primary">Reset Filters</Button>
      </div>
      <Table columns={columns} />
    </div>
  );
};
