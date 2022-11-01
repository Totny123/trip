import { getHotSuggests, getCategories } from "@/services/modules/home";
import { defineStore } from "pinia";

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],
    categories: [],
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
  },
});

export default useHomeStore;
