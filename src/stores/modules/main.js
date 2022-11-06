import { ONE_DAY_TIMESTAMP } from "@/utils/const";
import { defineStore } from "pinia";
import { throttle } from "lodash";

const useMainStore = defineStore("main", {
  state: () => ({
    startDateTimeStamp: Date.now(),
    endDateTimeStamp: Date.now() + ONE_DAY_TIMESTAMP,
    isLoading: false,
  }),
  actions: {
    setLoading: throttle(
      function (isLoading) {
        this.isLoading = isLoading;
      },
      // 让loading不频繁修改。视图不会闪动loading。
      400,
      { trailing: true }
    ),
  },
});

export default useMainStore;
