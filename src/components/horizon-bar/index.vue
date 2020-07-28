<template>
  <div class="horizon-bar__container">
    <item-bar v-for="(v, k) in list" :key="k" :item="v" :maxValue="maxValue" />
  </div>
</template>

<script>
import ItemBar from "./item-bar";

export default {
  name: "HorizonBar",
  data() {
    return {
      list: [
        {
          text: "轮胎",
          iosValue: 120,
          androidValue: 100
        },
        {
          text: "保养",
          iosValue: 80,
          androidValue: 70
        },
        {
          text: "全车件",
          iosValue: 80,
          androidValue: 50
        },
        {
          text: "车品",
          iosValue: 50,
          androidValue: 100
        },
        {
          text: "钣喷及事故件",
          iosValue: 100,
          androidValue: 100
        }
      ],
      maxValue: 0
    };
  },
  mounted() {
    this.maxValue = Math.max(
      ...this.list.map(item => item.iosValue + item.androidValue)
    );
  },
  methods: {},
  components: {
    ItemBar
  }
};
</script>

<style lang="scss" scoped>
.horizon-bar__container {
  width: 500px;
}
</style>
