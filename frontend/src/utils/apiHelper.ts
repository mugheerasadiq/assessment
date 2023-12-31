import axios from "axios";
import { baseURL } from "../config/url";

const fetchToken = () => {
  const token = `${localStorage.getItem("token")}`;
  return token;
};

export const getRequest = async (
  url: string,
  params: any = null,
  authorizedReq: boolean = true
) => {
  const token = fetchToken();
  try {
    const response = await axios.get(`${baseURL}${url}`, {
      headers: authorizedReq
        ? {
            Authorization: "Bearer " + token,
          }
        : undefined,
      params: params ? params : undefined,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const postRequest = (
  url: string,
  params: any = null,
  authorizedReq: boolean,
  data: any
) => {
  const token = fetchToken();
  return axios.post(`${baseURL}${url}`, data, {
    headers: authorizedReq
      ? {
          Authorization: "Bearer " + token,
        }
      : undefined,
    params: params ? params : undefined,
  });
};

export const deleteRequest = (
  url: string,
  params: any = null,
  authorizedReq: boolean,
) => {
  const token = fetchToken();
  return axios.delete(`${baseURL}${url}`,{
    headers: authorizedReq
      ? {
          Authorization: "Bearer " + token,
        }
      : undefined,
    params: params ? params : undefined,
  });
};

