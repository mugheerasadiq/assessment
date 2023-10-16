import React from "react";
import styles from "./styles.module.css";
import { Button, Checkbox, Form, Input, Select } from "antd";

const { Option } = Select;

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

export const SignInForm = () => {
  return (
    <div className={styles["container"]}>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className={styles["form-wrapper"]}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input username!" }]}
        >
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input email!" }]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input password!" }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item
          name="confirmPpassword"
          rules={[
            { required: true, message: "Please input confirm password!" },
          ]}
        >
          <Input.Password placeholder="Confirm Password" />
        </Form.Item>

        <Form.Item
          name="country"
          rules={[{ required: true, message: "Please select the country!" }]}
        >
          <Select placeholder="Country">
            <Option>Pakistan</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="state"
          rules={[{ required: true, message: "Please select the state!" }]}
        >
          <Select placeholder="State">
            <Option>Sindh</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="city"
          rules={[{ required: true, message: "Please select the city!" }]}
        >
          <Select placeholder="City">
            <Option>Karachi</Option>
          </Select>
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
