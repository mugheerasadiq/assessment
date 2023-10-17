import { useContext, useEffect } from "react";
import styles from "./styles.module.css";
import { getRequest } from "../../utils/apiHelper";
import { cityURL, countryURL, stateURL } from "../../config/url";
import { UserTable } from "./table/table";
import { useUserContext } from "./context/userContext";
import { notificationType } from "../../constants/notificationTypes";
import { NotificationContext } from "../../context/notification/context";

const User = (): JSX.Element => {
  const { setCountries, setCities, setStates, fetchUsers } = useUserContext();
  const {showNotification} = useContext(NotificationContext)

  const fetchCountries = async () => {
    try {
      const response = await getRequest(countryURL);
      const countries = response?.data.countries;
      if (countries) setCountries(countries);
    } catch (err: any) {
      const msg = err?.response?.data?.message;
      showNotification(notificationType.error, "Error", msg);
      console.log(err);
    }
  };

  const fetchStates = async () => {
    try {
      const response = await getRequest(stateURL);
      const states = response?.data.states;
      if (states) setStates(states);
    } catch (err: any) {
      const msg = err?.response?.data?.message;
      showNotification(notificationType.error, "Error", msg);
      console.log(err);
    }
  };

  const fetchCities = async () => {
    try {
      const response = await getRequest(cityURL);
      const states = response?.data.cities;
      if (states) setCities(states);
    } catch (err: any) {
      const msg = err?.response?.data?.message;
      showNotification(notificationType.error, "Error", msg);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCountries();
    fetchStates();
    fetchCities();
    fetchUsers();
  }, []);

  return (
    <div className={styles["container"]}>
      <UserTable />
    </div>
  );
};

export default User;
