import { ColumnsType } from "antd/es/table";
import { User } from "../types";

export const userTableColumns: ColumnsType<User> = [
  {
    title: "Username",
    dataIndex: "Username",
    key: "Username",
    align: "center",
    width: 150,
  },
  {
    title: "Email",
    dataIndex: "Email",
    key: "Email",
    align: "center",
    width: 120,
  },
  {
    title: "Country",
    dataIndex: "Country",
    key: "Country",
    align: "center",
    width: 120,
  },
  {
    title: "State",
    dataIndex: "State",
    key: "State",
    align: "center",
    width: 120,
  },
  {
    title: "City",
    dataIndex: "City",
    key: "City",
    align: "center",
    width: 120,
  },
];
