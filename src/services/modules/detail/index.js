import request from "@/services/request";

export const getHouseDetailData = (houseId) => {
  return request({
    method: "get",
    url: "/detail/infos",
    params: {
      houseId,
    },
  });
};
