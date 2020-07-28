<template>
  <div class="text-info__container" :style="{ flexDirection: direction }">
    <p :style="titleStyle">{{ item.title }}</p>

    <div class="text-info_content">
      <p class="text-info_data" :style="dataStyle">
        {{ toThousands(item.value) }}
      </p>
      <p class="text-info_unit" :style="unitStyle">{{ item.unit }}</p>
    </div>
  </div>
</template>

<script>
import { toThousands } from "@/commons/utils";

export default {
  name: "textInfo",
  props: {
    direction: String,
    titleStyle: Object,
    dataStyle: Object,
    unitStyle: Object,
    item: Object
  },
  methods: {
    toThousands
  }
};
</script>

<style lang="scss" scoped>
p {
  margin: 0;
  padding: 0;
}

.text-info__container {
  display: flex;
  justify-items: flex-start;

  .text-info_content {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }
}
</style>
