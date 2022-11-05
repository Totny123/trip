import { ONE_DAY_TIMESTAMP } from "@/utils/const";
import { defineStore } from "pinia";

const useMainStore = defineStore("main", {
  state: () => ({
    startDateTimeStamp: Date.now(),
    endDateTimeStamp: Date.now() + ONE_DAY_TIMESTAMP,
  }),
});

export default useMainStore;
