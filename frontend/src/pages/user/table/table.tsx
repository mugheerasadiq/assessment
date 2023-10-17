import React, { useEffect, useState } from "react";
import { userTableColumns } from "./columns/columns";
import { Table, Select, Button } from "antd";
import type { PaginationProps } from "antd";
import styles from "../styles.module.css";
import { getRequest } from "../../../utils/apiHelper";
import { userURL } from "../../../config/url";
import { useUserContext } from "../context/userContext";
import { Filters } from "./filters/filters.index";
import { useLoaderContext } from "../../../context/loader/context";
import { DeleteOutlined } from "@ant-design/icons";

export const UserTable = () => {
  const [columns, setColumns] = useState(userTableColumns);
  const { users, currentPage, setCurrentPage, totalRecords, filter } =
    useUserContext();
  const { setLoading } = useLoaderContext();

  const onPageChange: PaginationProps["onChange"] = (page: any) => {
    setCurrentPage(page);
    setLoading(true);
  };

  const paginationOptions = {
    current: currentPage,
    onChange: onPageChange,
    total: totalRecords,
    defaultPageSize: 5,
  };

  return (
    <div className={styles["table-container"]}>
      <Filters />
      <Table
        columns={columns}
        dataSource={users}
        pagination={paginationOptions}
        bordered
      />
    </div>
  );
};
