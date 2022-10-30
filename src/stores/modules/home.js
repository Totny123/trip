import { getHotSuggests } from "@/services/modules/home";
import { defineStore } from "pinia";

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],
  }),
  actions: {
    async fetchHotSuggests() {
      const { data } = await getHotSuggests();
      this.hotSuggests = data;
    },
  },
});

export default useHomeStore;
