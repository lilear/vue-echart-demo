<template>
  <div class="marquee-outbox" v-if="sendVal">
    <div class="marquee-inbox" ref="inbox">
      <div class="marquee-list" ref="item">
        {{ sendVal }}
      </div>
      <div class="marquee-list" v-if="needRun">
        {{ sendVal }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "marquee",
  props: {
    sendVal: String
  },
  data() {
    return {
      timer: null,
      needRun: false
    };
  },
  mounted: function() {
    var outbox = this.$parent.$refs.outbox;
    var target = this.$refs.inbox;
    var item = this.$refs.item;
    var initLeft = 0;


    if (item.clientWidth > outbox.clientWidth) {
      this.needRun = true;
      this.timer = setInterval(function() {
        initLeft++;
        if (initLeft >= target.offsetWidth / 2) {
          initLeft = 0;
        }
        target.style = "transform: translateX(-" + initLeft + "px)";
      }, 16);
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  }
};
</script>

<style lang="scss" scoped>
.marquee-outbox {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  .marquee-inbox {
    white-space: nowrap;
    position: absolute;
    font-size: 0;
    .marquee-list {
      margin-right: 25px;
      display: inline-block;
      font-size: 13px;
      height: 35px;
      line-height: 35px;
    }
  }
}
</style>
