<template>
  <div class="item-bar__container">
    <span class="item-bar__text">{{ item.text }}</span>
    <div class="item-bar__progress">
      <div
        class="ios"
        :style="{ width: (item.iosValue * 100) / maxValue + '%' }"
      ></div>
      <div
        class="android"
        :style="{
          width: (item.androidValue * 100) / maxValue + '%',
          left: (item.iosValue * 100) / maxValue - 10 + '%'
        }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemBar",
  props: {
    maxValue: Number,
    item: Object
  }
};
</script>

<style lang="scss" scoped>
.item-bar__container {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  .item-bar__text {
    width: 25%;
    padding-right: 5%;
    font-size: 18px;
    color: #fff;
    text-align: right;
    font-family: "Microsoft Yahei";
    font-weight: bold;
  }

  .item-bar__progress {
    width: 75%;
    padding-left: 2%;
    height: 36px;
    border-radius: 18px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;

    .ios {
      height: 22px;
      border-radius: 11px;
      background-color: rgb(55, 121, 253);
    }

    .android {
      height: 22px;
      border-radius: 11px;
      background-color: rgb(255, 165, 35);
      position: absolute;
      top: 7px;
    }
  }
}
</style>
