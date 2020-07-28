<template>
  <div class="spin-anim_container">
    <p
      ref="spinCurText"
      class="spin-text"
      style="animation: spinY1 1s ease-in 0.2s"
    >
      {{ curText }}
    </p>
    <p
      ref="spinNextText"
      class="spin-text"
      :class="{ spinY2: spinLock && spinNext }"
      v-show="spinNext"
    >
      {{ nextText }}
    </p>

    <div class="jsAnim">
      <!-- <transition
    name="fade1"
    @before-enter="handleBeforeEnter1"
    @enter="handleEnter1"
    @after-enter="handleAfterEnter1"
  >
      <div class="text1" v-show="show">{{text}}</div>
   </transition> -->
      <!-- <transition
    name="fade"
    @before-enter="handleBeforeEnter"
    @enter="handleEnter"
    @after-enter="handleAfterEnter"
  >
    <div class="text1 text2" v-show="!show">bye bye</div>
  </transition> -->
    </div>
    <!-- <el-button @click="handleClick">toggle</el-button>  -->

    <div ref="spin" @click="spinBlock">
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
import Velocity from "velocity-animate";

export default {
  name: "SpinText",
  props: {
    curText: String,
    nextText: String,
    spinLock: Boolean
  },
  data() {
    return {
      spinNext: false,
      show: false,
      texts: ["aaaaaa", "bbbbbb", "cccccc", "dddddd"],
      text: "",
      loop: false,
      curInd: 0,
      startSpin: false
    };
  },
  mounted() {
    this.show = true;
    this.text = this.texts[0];
    this.watchAnimended();
  },
  methods: {
    spinBlock() {
      this.startSpin = true;
      // this.handleEnter1(this.$refs.spin);
    },
    watchAnimended() {
      this.$refs.spinCurText.addEventListener("animationend", () => {
        if (!this.spinNext) {
          this.spinNext = true;
        }
      });
      this.$refs.spinNextText.addEventListener("animationend", () => {
        if (this.spinNext) {
          // this.spinNext = false;
          this.$emit("animEnded");
        }
      });
    },
    handleClick() {
      this.show = !this.show;
    },
    handleBeforeEnter1(el) {
      el.style.rotateY = "0deg";
    },
    handleEnter1(el) {
      if (this.curInd === this.texts.length - 1) {
        this.curInd = 0;
      } else {
        this.curInd++;
      }
      console.log(this.curInd, this.texts.length);
      Velocity(
        el,
        {
          rotateY: "-90deg"
        },
        {
          duration: 700,
          complete: () => {
            this.text = this.texts[this.curInd];
            Velocity(
              el,
              {
                rotateY: "0deg"
              },
              {
                duration: 700,
                complete: () => {
                  if (this.loop) {
                    this.handleEnter1(el);
                  }
                }
              }
            );
          }
        }
      );
    },
    handleAfterEnter1(el) {
      el.style.rotateY = "00deg";
      // this.show = !this.show;
    },
    handleBeforeEnter() {},
    handleEnter(el) {
      Velocity(
        el,
        {
          rotateY: "0deg"
        },
        {
          duration: 1000,
          complete: () => {
            console.log("complete", this.show);
          }
        }
      );
    },
    handleAfterEnter(el) {
      el.style.rotateY = "0deg";
      this.show = !this.show;
    }
  },
  watch: {
    spinLock() {
      this.spinNext = false;
    },
    startSpin(n, o) {
      console.log(n, o);
      this.handleEnter1(this.$refs.spin);
    }
  }
};
</script>

<style lang="scss" scoped>
.spin-anim_container {
  position: relative;
  color: #fff;

  .spin-text {
    color: #fff;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
  }
}

.jsAnim {
  position: relative;

  .text1 {
    position: absolute;
    top: 0;
    left: 0;
  }

  .text2 {
    transform: rotateY(90deg);
  }
}

@keyframes spinY1 {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(-90deg);
  }
}

@keyframes spinY2 {
  from {
    transform: rotateY(90deg);
  }
  to {
    transform: rotateY(0deg);
  }
}

.spinY1 {
  animation: spinY1 1s ease-in 0.2s;
}

.spinY2 {
  transform: rotateY(90deg);
  animation: spinY2 1s ease-out 0.2s;
}
</style>
