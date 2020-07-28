<template>
  <div class="progress-bar__container" :style="{ flexDirection: direction }">
    <div
      v-for="(v, k) in barColors"
      :key="k"
      :style="{
        ...itemBarStyle,
        backgroundColor: v.color,
        width: (item[v.type] * 100) / maxValue + '%'
      }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "progressBar",
  props: {
    direction: String,
    item: Object,
    itemBarStyle: Object,
    barColors: Array
  },
  data() {
    return {
      maxValue: 0
    };
  },
  mounted() {
    if (this.direction === "row") {
      this.maxValue = this.item.ios + this.item.android;
    } else {
      this.maxValue = Math.max(this.item.ios, this.item.android);
    }
  }
};
</script>

<style lang="scss" scoped>
.progress-bar__container {
  display: flex;
}
</style>
