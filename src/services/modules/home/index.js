import request from "@/services/request";

export const getHotSuggests = () => {
  return request({ url: "/home/hotSuggests", method: "get" });
};
