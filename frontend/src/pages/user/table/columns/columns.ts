import { ColumnsType } from "antd/es/table";
import { User } from "../../types";
import { ActionColumnRenderer } from "./columnRenderer";

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
    render: (data: any) => data.Name
  },
  {
    title: "State",
    dataIndex: "State",
    key: "State",
    align: "center",
    width: 120,
    render: (data: any) => data.Name
  },
  {
    title: "City",
    dataIndex: "City",
    key: "City",
    align: "center",
    width: 120,
    render: (data: any) => data.Name
  },
  {
    width: 80,
    title: 'Action',
    key: 'action',
    align: "center",
    render: ActionColumnRenderer
  },
];
