import {
  getHotSuggests,
  getCategories,
  getHouseList,
} from "@/services/modules/home";
import { defineStore } from "pinia";

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],
    categories: [],
    houseList: [],
    currentPage: 1,
  }),
  actions: {
    async fetchHotSuggests() {
      const { data } = await getHotSuggests();
      this.hotSuggests = data;
    },
    async fetchCategories() {
      const { data } = await getCategories();
      this.categories = data;
    },
    async fetchHouseList() {
      const { data } = await getHouseList(this.currentPage);
      this.currentPage++;
      this.houseList.push(...data);
    },
  },
});

export default useHomeStore;
