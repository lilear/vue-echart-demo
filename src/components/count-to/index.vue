<template>
  <div class="count-to-demo__container" @click="addNum(20)">
    <span v-for="(v, k) in eVal" :key="k">
      <span v-if="v === '.' || v === ','">{{ v }}</span>
      <countTo
        :startVal="sVal[k] * 1"
        :endVal="v * 1"
        :duration="1000"
        v-else
      ></countTo>
    </span>
  </div>
</template>

<script>
import countTo from "vue-count-to";
export default {
  name: "CountToFixWidth",
  components: { countTo },
  props: {
    startVal: Number,
    endVal: Number,
    duration: Number
  },
  computed: {
    eInt() {
      // 数字千分位处理
      let str = this.toThousands(this.endVal);

      // 将字符串分割并翻转
      let arr = str
        .toString()
        .split(".")[0]
        .split("");
      return arr;
    },
    eDec() {
      // 数字千分位处理
      let str = this.toThousands(this.endVal);

      // 将字符串分割
      let dec = str.toString().split(".")[1];
      let arr = [];
      if (dec) {
        arr = dec.split("");
        arr.unshift(".");
      }
      return arr;
    },
    sInt() {
      // 数字千分位处理
      let str = this.toThousands(this.startVal);
      let eInt = [...this.eInt];

      // 将字符串分割并翻转
      let arr = str
        .toString()
        .split(".")[0]
        .split("")
        .reverse((pre, next) => pre - next);

      eInt
        .reverse((pre, next) => pre - next)
        .map((v, k) => {
          if (!arr[k]) arr[k] = "0";
        });
      return arr.reverse((pre, next) => pre - next);
    },
    sDec() {
      // 数字千分位处理
      let str = this.toThousands(this.endVal);
      let eDec = [...this.eDec];

      // 将字符串分割

      let dec = str.toString().split(".")[1];
      let arr = [];
      if (dec) {
        arr = dec.split("");
        arr.unshift(".");

        eDec &&
          eDec.map((v, k) => {
            if (v !== ".") {
              if (!arr[k]) arr[k] = "0";
            } else {
              arr[k] = ".";
            }
          });
      }
      return arr;
    },
    eVal() {
      return [...this.eInt, ...this.eDec];
    },
    sVal() {
      return [...this.sInt, ...this.sDec];
    }
  },
  methods: {
    addNum(num) {
      this.$emit("addNum", num);
    },
    toThousands(num) {
      if (num == null) {
        return "--";
      }

      num += "";
      if (!num.includes(".")) num += ".";
      return num
        .replace(/(\d)(?=(\d{3})+\.)/g, function($0, $1) {
          return $1 + ",";
        })
        .replace(/\.$/, "");
    }
  }
};
</script>

<style lang="scss" scoped>
.count-to-demo__container {
  width: 300px;
  height: 300px;
  line-height: 300px;
  border: 1px dashed rgb(255, 214, 0);
  font-size: 32px;
  font-family: PingFangSC-Medium;
  color: rgb(255, 214, 0);
}
</style>
