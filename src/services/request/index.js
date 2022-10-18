import axios from "axios";
import { baseURL, timeout } from "./config";

const axiosInstance = axios.create({
  baseURL,
  timeout,
});

export const request = (config) => {
  return new Promise((resolve, reject) => {
    axiosInstance(config)
      .then((res) => {
        resolve(res.data);
      })
      .catch(reject);
  });
};

export default request;
