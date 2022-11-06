<template>
  <div class="facility">
    <DetailSection title="房屋设施" more-text="查看全部设施">
      <div class="container">
        <template
          v-for="(item, index) in houseFacility.houseFacilitys"
          :key="item.groupName"
        >
          <div class="item" v-if="houseFacility.facilitySort.includes(index)">
            <div class="groupName">
              <img :src="item.icon" alt="" />
              <span>{{ item.groupName }}</span>
            </div>
            <div class="facilitys">
              <template v-for="i in item.facilitys.slice(0, 4)" :key="i.name">
                <div class="textBlock">
                  <van-icon name="passed" />
                  <span>{{ i.name }}</span>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </DetailSection>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import DetailSection from "@/components/DetailSection/index.vue";

defineProps({
  houseFacility: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="less" scoped>
.facility {
  .container {
    background-color: #f8fafb;
    padding: 1px 15px;
  }
  .item {
    display: flex;
    align-items: center;
    margin: 20px 0;

    .groupName {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 60px;
      img {
        width: 30px;
      }
      span {
        font-size: 12px;
        margin-top: 4px;
      }
    }
    .facilitys {
      margin-left: 20px;
      font-size: 12px;
      color: #bbd9d4;
      flex: 1;
      display: flex;
      align-items: center;
      align-content: center;
      flex-wrap: wrap;
      height: 100%;
      span {
        margin-left: 2px;
        color: #333;
      }
      .textBlock {
        width: 50%;
        margin: 4px 0;
      }
    }
  }
}
</style>
