<template>
  <div class="search">
    <div class="location">
      <span @click="cityHandle">{{ currentCity.cityName }}</span>
      <div class="position" @click="positionHandle">
        <span>我的位置</span>
        <van-icon name="aim" />
      </div>
    </div>
    <div class="date-range-container">
      <div class="date-range" @click="dateRangeShow = true">
        <div class="start-date date">
          <div class="date-tip">入住</div>
          <div class="date-value">{{ startDate }}</div>
        </div>
        <div class="stay-date">共{{ stayDate }}晚</div>
        <div class="end-date date">
          <div class="date-tip">离店</div>
          <div class="date-value">{{ endDate }}</div>
        </div>
      </div>
      <van-calendar
        :poppable="true"
        :round="false"
        :formatter="formatterDateText"
        v-model:show="dateRangeShow"
        type="range"
        color="orange"
        @confirm="onDateRangeConfirm"
      />
    </div>
  </div>
</template>

<script setup>
import { useCityStore } from "@/stores/modules/city";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { formatDate } from "@/utils";

// 城市点击逻辑
const router = useRouter();
const cityHandle = () => {
  router.push("/city");
};

// 定位点击逻辑
const positionHandle = () => {
  navigator.geolocation.getCurrentPosition(
    (res) => {
      console.log(res);
    },
    (err) => {
      console.log(err);
    },
    { timeout: 1000 }
  );
};

// 获取城市名字逻辑
const cityStore = useCityStore();
const { currentCity } = storeToRefs(cityStore);

/* ----------  start: 日期选择逻辑  ---------- */
const startDate = ref(formatDate(new Date()));
const stayDate = ref(1);
const endDate = ref(formatDate(Date.now() + 24 * 60 * 60 * 1000));
const dateRangeShow = ref(false);

const formatterDateText = (day) => {
  if (day.type === "start") {
    day.bottomInfo = "入住";
  } else if (day.type === "end") {
    day.bottomInfo = "离店";
  }
  return day;
};

const onDateRangeConfirm = (date) => {
  const [_startDate, _endDate] = date;
  stayDate.value =
    (new Date(_endDate).getTime() - new Date(_startDate).getTime()) /
    (24 * 60 * 60 * 1000);
  startDate.value = formatDate(_startDate);
  endDate.value = formatDate(_endDate);
  dateRangeShow.value = false;
};

/* ----------  end  ---------- */
</script>

<style lang="less" scoped>
.location {
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  font-size: 14px;
  .position {
    i {
      margin-left: 4px;
    }
  }
}
.date-range-container {
  --van-calendar-popup-height: 100%;
}
.date-range {
  display: flex;
  padding: 0 20px;
  margin-top: 10px;
  .date-tip {
    font-size: 12px;
    color: gray;
  }
  .date-value {
    margin-top: 5px;
  }
  .stay-date {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .date {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
