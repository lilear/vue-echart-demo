<template>
  <div class="card_container" :style="cardStyle">
    <text-info
      :direction="tiDirection"
      :titleStyle="titleStyle"
      :dataStyle="dataStyle"
      :unitStyle="unitStyle"
      :item="item.info"
    />
    <progress-bar
      :direction="pbDirection"
      :itemBarStyle="itemBarStyle"
      :barColors="barColors"
      :item="item.bar"
    />
  </div>
</template>

<script>
import TextInfo from "./text-info";
import ProgressBar from "./progress-bar";

export default {
  name: "card",
  props: {
    cardStyle: Object,

    tiDirection: String,
    titleStyle: Object,
    dataStyle: Object,
    unitStyle: Object,

    pbDirection: String,
    itemBarStyle: Object,
    barColors: Array,

    item: Object
  },
  components: {
    TextInfo,
    ProgressBar
  }
};
</script>

<style lang="scss" scoped></style>
