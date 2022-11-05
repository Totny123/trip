import { ref, onMounted, onUnmounted, onActivated, onDeactivated } from "vue";
import { throttle } from "lodash";

const useScroll = () => {
  const isBottom = ref(false);
  const scrollTop = ref(0);
  const clientHeight = ref(0);
  const scrollHeight = ref(0);
  const scrollHandle = throttle(() => {
    scrollTop.value = document.documentElement.scrollTop;
    clientHeight.value = document.documentElement.clientHeight;
    scrollHeight.value = document.documentElement.scrollHeight;
    if (scrollHeight.value <= scrollTop.value + clientHeight.value) {
      isBottom.value = true;
    } else {
      isBottom.value = false;
    }
  }, 100);

  onMounted(() => {
    window.addEventListener("scroll", scrollHandle);
  });
  onActivated(() => {
    window.addEventListener("scroll", scrollHandle);
  });
  onDeactivated(() => {
    window.removeEventListener("scroll", scrollHandle);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", scrollHandle);
  });
  return { isBottom, scrollTop, scrollHeight, clientHeight };
};

export default useScroll;
export { useScroll };
