import React, { useContext, useState } from "react";
import styles from "./styles.module.css";
import { Button, Form, Input, Select, notification } from "antd";
import { UserInitials } from "./initialValues";
import { getRequest, postRequest } from "../../../utils/apiHelper";
import { cityURL, countryURL, signupURL, stateURL } from "../../../config/url";
import { Country, State, User } from "../types";
import { NotificationContext } from "../../../context/notification/context";
import { notificationType } from "../../../constants/notificationTypes";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

export const SignupForm = () => {
  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const { showNotification } = useContext(NotificationContext);

  const saveUserInfo = (info: any) => {
    localStorage.setItem("token", info.token);
    localStorage.setItem("user", info.user);
  };

  const onFinish = async (values: User) => {
    try {
      const userPayload = makeUserPayload(values);
      const response = (await postRequest(signupURL, null, false, userPayload))
        .data;

      saveUserInfo(response);

      showNotification(
        notificationType.success,
        "Success",
        "User registered successfully"
      );

      navigate("/users");
    } catch (err: any) {
      const msg = err?.response?.data?.message;
      showNotification(notificationType.error, "Error", msg);
      console.log(err);
    }
  };

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
      const countryFormValue = form.getFieldValue("country");
      const selectedCountry: any = country.find(
        (item: Country) => item.Name === countryFormValue
      );

      const params = selectedCountry
        ? {
            countryID: selectedCountry.ID,
          }
        : undefined;

      const response = await getRequest(stateURL, params);
      const states = response?.data.states;
      if (states) setState(states);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCities = async () => {
    try {
      const stateFormValue = form.getFieldValue("state");
      const selectedState: any = state.find(
        (item: State) => item.Name === stateFormValue
      );

      const params = selectedState
        ? {
            countryID: selectedState.CountryID,
            stateID: selectedState.ID,
          }
        : undefined;

      const response = await getRequest(cityURL, params);
      const states = response?.data.cities;
      if (states) setCity(states);
    } catch (err) {
      console.log(err);
    }
  };

  const makeUserPayload = (user: User) => {
    const selectedCity: any = city.find(
      (item: State) => item.Name === user.city
    );

    return {
      ...user,
      country: selectedCity.CountryID,
      state: selectedCity.StateID,
      city: selectedCity.ID,
    };
  };

  return (
    <div className={styles["container"]}>
      <Form
        name="basic"
        initialValues={UserInitials}
        onFinish={onFinish}
        autoComplete="off"
        className={styles["form-wrapper"]}
        form={form}
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
          name="confirmPassword"
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
          <Select placeholder="Country" showSearch onClick={fetchCountries}>
            {country.map((country: Country, index: number) => {
              return (
                <Option key={index} value={country.Name}>
                  {country.Name}
                </Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item
          name="state"
          rules={[{ required: true, message: "Please select the state!" }]}
        >
          <Select placeholder="State" showSearch onClick={fetchStates}>
            {state.map((state: State, index: number) => {
              return (
                <Option key={index} value={state.Name}>
                  {state.Name}
                </Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item
          name="city"
          rules={[{ required: true, message: "Please select the city!" }]}
        >
          <Select placeholder="City" showSearch onClick={fetchCities}>
            {city.map((city: State, index: number) => {
              return (
                <Option key={index} value={city.Name}>
                  {city.Name}
                </Option>
              );
            })}
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
