const getImgURL = (url) =>
  new URL(`../assets/img/${url}`, import.meta.url).href;

export { getImgURL };
