import React, { useContext } from "react";
import styles from "./styles.module.css";
import { Button, Form, Input } from "antd";
import { postRequest } from "../../../utils/apiHelper";
import { signinURL } from "../../../config/url";
import { NotificationContext } from "../../../context/notification/context";
import { notificationType } from "../../../constants/notificationTypes";
import { useNavigate } from "react-router-dom";



export const SignInForm = () => {
  const { showNotification } = useContext(NotificationContext);
  const navigate = useNavigate();

  const saveUserInfo = (info: any) => {
    localStorage.setItem("token", info.data.token);
    localStorage.setItem("user", JSON.stringify(info.data.user));
  };
  
  const onFinish = async (values: any) => {
    try{
      const response = (await postRequest(signinURL, null, false, values)).data;
      saveUserInfo(response);
      navigate("/users");
    }
    catch(err: any){
      const msg = err?.response?.data?.message;
      showNotification(notificationType.error, "Error", msg);
      console.log(err);
    }
};


  return (
    <div className={styles["container"]}>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        className={styles["form-wrapper"]}
      >
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please input email!" },
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input password!" }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
