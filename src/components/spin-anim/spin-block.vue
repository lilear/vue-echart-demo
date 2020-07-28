<template>
  <div
    :ref="animRef"
    :class="{
      spinY: spinType == 'spinY' && toggle,
      spinX: spinType == 'spinX' && toggle
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "SpinBlock",
  props: {
    animRef: {
      type: String,
      default: "spinNode"
    },
    animkey: {
      type: Number,
      default: 0
    },
    spinType: String,
    toggle: Boolean
  },
  mounted() {
    this.watchAnimEnded();
  },
  methods: {
    watchAnimEnded() {
      this.$refs[this.animRef].addEventListener("animationend", () => {
        this.$emit("animationend", this.animkey);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@keyframes spinX {
  from {
    transform: rotateX(0deg);
  }
  to {
    transform: rotateX(-180deg) skewX(-45deg);
  }
}

@keyframes spinY {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(-180deg);
  }
}

.spinY {
  animation: spinY 0.3s ease-in 0.2s;
}

.spinX {
  animation: spinX 0.3s ease-in 0.2s;
}
</style>
