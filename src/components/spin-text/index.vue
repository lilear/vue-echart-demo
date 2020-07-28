<template>
  <div class="spin-text__container">
    <spin-anim
      :curText="curText"
      :nextText="nextText"
      :spinLock="spinLock"
      @animEnded="animEnded"
    />
  </div>
</template>

<script>
import SpinAnim from "./spin-anim";

export default {
  name: "SpinText",
  data() {
    return {
      list: ["aaa", "bbb", "ccc", "ddd"],
      curIndex: 1,
      curText: "",
      nextText: "",
      spinLock: true
    };
  },
  mounted() {
    this.curText = this.list[0];
    this.nextText = this.list[1];
  },
  methods: {
    animEnded() {
      this.nextAnim();
      this.spinLock = false;

      this.startAnim();
    },
    startAnim() {
      setTimeout(() => {
        this.spinLock = true;
      }, 1000);
    },
    nextAnim() {
      if (this.curIndex === this.list.length - 1) {
        this.curText = this.list[this.curIndex];
        this.nextText = this.list[0];
        this.curIndex = 0;
      } else {
        this.curText = this.list[this.curIndex];
        this.nextText = this.list[this.curIndex + 1];
        this.curIndex++;
      }
    }
  },
  components: {
    SpinAnim
  }
};
</script>

<style lang="scss" scoped>
.spin-text__container {
  width: 444px;
  height: 444px;
  text-align: left;
  padding: 10px;
  border: 1px dashed rgb(255, 214, 0);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
