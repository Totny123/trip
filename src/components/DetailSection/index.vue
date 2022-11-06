<template>
  <div class="section">
    <div class="header">
      {{ title }}
    </div>
    <div class="main">
      <slot>默认内容</slot>
    </div>
    <div class="footer">{{ moreText }} &gt;</div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "默认标题",
  },
  moreText: {
    type: String,
    default: "加载更多",
  },
});
</script>

<style lang="less" scoped>
.section {
  padding: 0 10px;
  margin-top: 10px;
  border-top: 10px solid #f3f4f5;
}
.header {
  height: 44px;
  line-height: 44px;
  font-size: 18px;
  font-weight: bold;
}
.main {
}
.footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 44px;
  font-size: 14px;
  color: orange;
  font-weight: bold;
}
</style>
