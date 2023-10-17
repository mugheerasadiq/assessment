import React, { useEffect, useState } from "react";
import { userTableColumns } from "./columns";
import { Table, Select, Button } from "antd";
import type { PaginationProps } from "antd";
import styles from "../styles.module.css";
import { getRequest } from "../../../utils/apiHelper";
import { userURL } from "../../../config/url";

export const UserTable = ({
  countries,
  states,
  cities,
  users,
  setUsers,
}: any) => {
  const pageSize = 5;
  const [columns, setColumns] = useState(userTableColumns);
  const [currentPage, setCurrentPage] = useState(1);
  const [tableConfig, setTableConfig] = useState({
    sortField: "ID",
    sortOrder: "asc",
    skip: 0,
    limit: pageSize,
    country: [],
    city: [],
    state: [],
  });

  const handleChange = () => {};

  const onPageChange: PaginationProps["onChange"] = (page: any) =>
    setCurrentPage(page);

  const paginationOptions = {
    current: currentPage,
    onChange: onPageChange,
    total: users.length,
    defaultPageSize: 5,
  };

  const fetchUsers = async () => {
    try {
      const response = (await getRequest(userURL, tableConfig)).data;
      console.log(response.data.users);
      setUsers(response.data.users);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

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
      <Table
        columns={columns}
        dataSource={users}
        pagination={paginationOptions}
        bordered
      />
    </div>
  );
};
