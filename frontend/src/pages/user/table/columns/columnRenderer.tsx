import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import style from "../../styles.module.css";
import { useUserContext } from "../../context/userContext";
import { useLoaderContext } from "../../../../context/loader/context";
import { userURL } from "../../../../config/url";
import { deleteRequest } from "../../../../utils/apiHelper";

export const ActionColumnRenderer = (value: any, record: any) => {
  const { fetchUsers } = useUserContext();
  const { setLoading } = useLoaderContext();

  const deleteUser = async (userID: any) => {
    try {
      setLoading(true);
      const response = await deleteRequest(`${userURL}/${userID}`, null, true);
      fetchUsers();
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <div className={style["action-container"]}>
      <DeleteOutlined
        style={{ color: "red", cursor: "pointer", marginRight: 10 }}
        onClick={() => deleteUser(record?.ID)}
      />
      <EditOutlined />
    </div>
  );
};
