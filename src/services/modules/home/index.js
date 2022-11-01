import request from "@/services/request";

export const getHotSuggests = () => {
  return request({ url: "/home/hotSuggests", method: "get" });
};

export const getCategories = () => {
  return request({ url: "/home/categories", method: "get" });
};
