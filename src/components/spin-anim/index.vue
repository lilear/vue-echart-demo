<template>
  <div class="spin-anim_container">
    <div v-for="(v, k) in list" :key="k">
      <SpinBlock
        animRef="spin"
        spinType="spinX"
        :toggle="Boolean(~spinCurInds.indexOf(k))"
        :animkey="k"
        @animationend="animationend"
      >
        <span class="num">{{ k + 1 }}</span>
        <span class="title">{{ v.title }}</span>
      </SpinBlock>

      <SpinBlock spinType="spinX" :toggle="Boolean(~spinCurInds.indexOf(k))">
        <div class="spin-anim">
          <div
            class="spin-anim_progress"
            :style="{ width: parseInt((v.value * 100) / maxValue) - 20 + '%' }"
          >
            <div
              class="spin-anim_progress-anim"
              :class="{
                blockMove: proCurInd === k
              }"
            ></div>
          </div>
          <div
            class="spin-anim_rest"
            :style="{
              width: parseInt(((maxValue - v.value) * 100) / maxValue) + '%'
            }"
          ></div>
          <p class="spin-anim_value">{{ v.value }}亿</p>
        </div>
      </SpinBlock>
    </div>
  </div>
</template>

<script>
import SpinBlock from "./spin-block";
export default {
  name: "SpinAnim",
  data() {
    return {
      list: [
        {
          title: "轮胎",
          value: 2971
        },
        {
          title: "轮胎",
          value: 2371
        },
        {
          title: "轮胎",
          value: 2071
        },
        {
          title: "轮胎",
          value: 1771
        },
        {
          title: "轮胎",
          value: 1471
        }
      ],
      spinType: "spinX",
      maxValue: 0,
      spinTimer: null,
      progressTimer: null,
      spinCurInds: [],
      proCurInd: -1,
      spinY: false,
      spinX: false
    };
  },
  mounted() {
    // this.watchSpinAnimEnded();
    this.maxValue = Math.max(...this.list.map(item => item.value));
    this.onProgressMove();
  },
  beforeDestroy() {
    this.progressTimer = null;
    this.spinTimer = null;
  },
  methods: {
    onProgressMove() {
      this.proCurInd++;
      this.progressTimer = setInterval(() => {
        if (this.proCurInd == this.list.length) {
          this.proCurInd = -1;
          clearInterval(this.progressTimer);
          this.progressTimer = null;
          this.onBlockSpin();
        } else {
          this.proCurInd++;
        }
      }, 500);
    },
    onBlockSpin() {
      let curIndex = 0;
      this.spinTimer = setInterval(() => {
        this.spinCurInds.push(curIndex++);
      }, 150);
    },
    animationend(ind) {
      if (ind === this.list.length - 1) {
        clearInterval(this.spinTimer);
        this.spinTimer = null;
        this.spinCurInds = [];
        this.onProgressMove();
      }
    }
  },
  components: {
    SpinBlock
  }
};
</script>

<style lang="scss" scoped>
p {
  margin: 0;
  padding: 0;
}
.spin-anim_container {
  width: 444px;
  text-align: left;
  padding: 10px;
  border: 1px dashed rgb(255, 214, 0);

  .num {
    font-size: 18px;
    color: #ffd600;
    font-weight: normal;
  }

  .title {
    font-size: 18px;
    color: #fff;
    margin-left: 23px;
  }
}

.spin-anim {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.spin-anim_progress {
  height: 12px;
  background-color: rgb(46, 204, 113);
  overflow: hidden;

  .spin-anim_progress-anim {
    width: 70px;
    height: 2px;
    margin-left: -70px;
    background: radial-gradient(rgb(221, 253, 213) 15%, rgba(0, 0, 0, 0) 80%);
  }
}

.spin-anim_rest {
  height: 12px;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(46, 204, 113, 0.5);
}

.spin-anim_value {
  width: 20%;
  height: 37px;
  line-height: 37px;
  font-size: 20px;
  color: #ffd600;
  margin-left: 10px;
}

@keyframes blockMove {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(300px);
  }
}

.blockMove {
  animation: blockMove 0.5s ease-in 0.2s;
}
</style>
