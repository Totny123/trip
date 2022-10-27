import dayjs from "dayjs";

const getImgURL = (url) =>
  new URL(`../assets/img/${url}`, import.meta.url).href;

const formatDate = (date) => dayjs(date).format("MM月DD日");

export { getImgURL, formatDate };
