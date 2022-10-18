import { request } from "@/services/request";

export const getCitiesList = () => {
  return request({
    method: "get",
    url: "/city/all",
  });
};
