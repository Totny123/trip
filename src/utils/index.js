import dayjs from "dayjs";

const getImgURL = (url) =>
  new URL(`../assets/img/${url}`, import.meta.url).href;

const formatDate = (date, template = "MM月DD日") =>
  dayjs(date).format(template);

export { getImgURL, formatDate };
