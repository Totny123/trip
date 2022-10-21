import { defineStore } from "pinia";
import { getCitiesList } from "@/services";

export const useCityStore = defineStore("city", {
  state: () => ({
    allCities: {},
    currentCity: { cityName: "北京" },
  }),
  actions: {
    async fetchAllCity() {
      const { data } = await getCitiesList();
      this.allCities = data;
    },
  },
});
