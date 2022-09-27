import { defineStore } from "pinia";

const useCityStore = defineStore("city", {
  state: () => ({
    cities: ["广州", "深圳", "北京", "上海"],
  }),
  actions: {
    addCity() {
      this.cities.push("武汉");
    },
  },
  getters: {
    getCities() {
      return this.cities;
    },
  },
});

export default useCityStore;
