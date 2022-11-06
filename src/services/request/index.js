import axios from "axios";
import { baseURL, timeout } from "./config";
import useMainStore from "@/stores/modules/main";

const mainStore = useMainStore();

// 创建axios实列
const axiosInstance = axios.create({
  baseURL,
  timeout,
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    mainStore.setLoading(true);
    return config;
  },
  (err) => {
    console.log("网络请求失败：", err);
    return err;
  }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  (data) => {
    mainStore.setLoading(false);
    return data;
  },
  (err) => {
    mainStore.setLoading(false);
    console.log("网络响应失败：", err);
    return err;
  }
);

// 请求方法
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
