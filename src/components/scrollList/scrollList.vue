<template>
  <div class="scroll-board-container" v-if="scrollData.length">
    <div
      ref="scrollBoard"
      class="body-wrapper"
      :class="{ animated: animInfo.isAnim }"
      :style="{ transform: `translateY(${animInfo.offsetY}px)` }"
    >
      <div
        ref="trNode"
        class="scroll-board-row"
        :class="{ oddBGC: !isEven(v.orderNum), evenBGC: isEven(v.orderNum) }"
        v-for="(v, k) in scrollData"
        :key="k"
      >
        <div class="brand-container">
          <div class="order-icon">
            {{ v.orderNum }}
          </div>
          <div class="brand-name" ref="outbox">
            <!-- <marquee :sendVal="v.brand" /> -->
            {{ v.brand }}
          </div>
        </div>
        <div class="brand-value">
          {{ v.value }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScrollList',
  props: {
    rawData: Array,
    loadCount: Number
  },
  data() {
    return {
      rowHeight: 64,
      lastData: [],
      scrollData: [],
      timer: null,
      animInfo: {
        isAnim: true,
        delay: 500,
        curIndex: -1,
        offsetY: 0
      }
    };
  },
  mounted() {
    this._el = this.$refs.scrollBoard;
    this.startAnim();
  },
  methods: {
    isEven(num) {
      return !num % 2;
    },
    startAnim() {
      // 立即执行，不等待
      this.handleAnim();

      this.timer = setInterval(() => {
        this.handleAnim();
      }, this.animInfo.delay);
    },
    handleAnim() {
      if (this.animInfo.curIndex === this.lastData.length) {
        // 动画状态改变，立即更新渲染页面
        this.$set(this.animInfo, 'isAnim', false);
      } else {
        this.animInfo.curIndex++;
        this.animInfo.offsetY = -this.animInfo.curIndex * this.rowHeight;
        if (!this.animInfo.isAnim) {
          this.animInfo.isAnim = true;
        }
      }
    },
    stopAnim() {
      clearInterval(this.timer);
      this.timer = null;
    },
    resetAnim() {
      // debugger;
      this.animInfo.offsetY = 0;
      this.animInfo.curIndex = 0;
    },
    init() {
      this.lastData = this.rawData;
      this.scrollData = this.rawData.concat(this.rawData);

      // this.rowHeight = this.$refs.trNode[0].offsetHeight || 64;
    },
    dataUpdate() {
      // 此处items是旧数据 rawdata是新数据
      this.scrollData = this.lastData.concat(this.rawData);
      this.lastData = this.rawData;
    }
  },
  components: {
    // Marquee
  },
  watch: {
    loadCount(newVal) {
      if (newVal <= 1) {
        this.init();
      }
    },
    'animInfo.isAnim': function(newVal) {
      if (!newVal) {
        this.stopAnim();
        this.resetAnim();
        this.dataUpdate();

        // 等待页面渲染结束后再执行，下一次渲染会进入队列执行
        this.$nextTick(function() {
          // debugger;
          // debugger;
          // console.log(this.$refs.scrollBoard.scrollTop);
          if (!this.$refs.scrollBoard.scrollTop) {
            this.startAnim();
          }
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.scroll-board {
  width: 100%;
  padding-right: 10px;
}
.scroll-board-container {
  width: 100%;
  height: 100%;

  .body-wrapper {
    width: 100%;
    font-size: 16px;
    font-weight: bold;
  }
  .animated {
    transition: transform 0.5s ease;
  }
}
.scroll-board-row {
  width: 100%;
  line-height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 10px;
  box-sizing: border-box;

  .brand-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .order-icon {
      width: 25px;
      height: 25px;
      border-radius: 20px;
      background-color: #ea0029;
      line-height: 25px;
      text-align: center;
      font-size: 14px;
      font-weight: bold;
      margin-right: 10px;
    }

    .brand-name {
      width: 230px;
      height: 100%;
      color: #fff;
      font-size: 18px;
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;
    }
  }

  .brand-value {
    color: #fff;
    font-size: 22px;
    font-weight: bold;
  }
}
.oddBGC {
  background-color: rgb(7, 5, 23);
}

.evenBGC {
  background-color: rgb(17, 13, 47);
}
</style>
