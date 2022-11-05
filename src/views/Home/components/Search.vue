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
          <div class="date-value">{{ startDateStr }}</div>
        </div>
        <div class="stay-date">共{{ stayDate }}晚</div>
        <div class="end-date date">
          <div class="date-tip">离店</div>
          <div class="date-value">{{ endDateStr }}</div>
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
    <div class="other-options">
      <div class="other-options-item">
        <span class="other-options-price">价格不限</span>
        <span>人数不限</span>
      </div>
      <div class="other-options-item">
        <span>关键字/位置/民宿名</span>
      </div>
    </div>
    <div class="hot-suggest-list">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <span
          class="hot-suggest"
          :style="{
            color: item.tagText.color,
            background: item.tagText.background.color,
          }"
          >{{ item.tagText.text }}</span
        >
      </template>
    </div>
    <div class="search-button">
      <button @click="searchHandle">开始搜索</button>
    </div>
  </div>
</template>

<script setup>
import { useCityStore } from "@/stores/modules/city";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { formatDate } from "@/utils";
import useHomeStore from "@/stores/modules/home";
import useMainStore from "@/stores/modules/main";
import { computed } from "@vue/reactivity";
import { ONE_DAY_TIMESTAMP } from "@/utils/const";

// #region tip: 城市点击逻辑
const router = useRouter();
const cityHandle = () => {
  router.push("/city");
};
// #endregion

// #region tip: 定位点击逻辑
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
// #endregion

// #region tip: 获取城市名字逻辑
const cityStore = useCityStore();
const { currentCity } = storeToRefs(cityStore);
// #endregion

// #region tip: 日期选择逻辑
const { startDateTimeStamp, endDateTimeStamp } = storeToRefs(useMainStore());

const startDateStr = computed(() => formatDate(startDateTimeStamp.value));
const endDateStr = computed(() => formatDate(endDateTimeStamp.value));
const stayDate = computed(
  () => (endDateTimeStamp.value - startDateTimeStamp.value) / ONE_DAY_TIMESTAMP
);
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
  startDateTimeStamp.value = _startDate;
  endDateTimeStamp.value = _endDate;
  dateRangeShow.value = false;
};
// #endregion

// #region tip: 热门建议
const homeStore = useHomeStore();
const { hotSuggests } = storeToRefs(homeStore);
// #endregion

// #region tip: 搜索按钮点击
const searchHandle = () => {
  router.push({
    path: "/search",
    query: {
      startDateStr: startDateStr.value,
      endDateStr: endDateStr.value,
      currentCity: currentCity.value.cityName,
    },
  });
};
// #endregion
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
.other-options {
  margin-top: 20px;
  padding: 0 20px;
  color: gray;
  font-size: 12px;
  &-item {
    display: flex;
    span {
      display: inline-block;
      height: 44px;
    }
  }
  .other-options-price {
    flex: 1;
  }
}
.hot-suggest-list {
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
  .hot-suggest {
    color: red;
    padding: 4px 8px;
    margin: 5px;
    border-radius: 8px;
    font-size: 12px;
    line-height: 1;
  }
}
.search-button {
  padding: 0 20px;
  margin-top: 10px;
  button {
    width: 100%;
    height: 44px;
    font-size: 18px;
    background-color: orange;
    color: white;
    border-radius: 22px;
  }
}
</style>
