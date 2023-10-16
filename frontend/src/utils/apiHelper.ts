import axios from "axios";

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
    const response = await axios.get(url, {
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
  return axios.post(url, data, {
    headers: authorizedReq
      ? {
          Authorization: "Bearer " + token,
        }
      : undefined,
    params: params ? params : undefined,
  });
};
