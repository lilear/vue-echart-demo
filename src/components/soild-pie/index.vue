import echart from '@/lib/echart';
<template>
  <div
    ref="solidPie"
    style="width: 538px; height: 430px;border: 1px dashed rgb(255, 214, 0);"
  ></div>
</template>

<script>
import echart from "@/lib/echart";

export default {
  name: "SolidPie",
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      const chart = echart.init(this.$refs.solidPie);
      let option = this.getOption();
      chart.setOption(option);
    },
    getOption() {
      // var colorList = ["#f1c40f", "#27ae60", "#e67e22", "#2980b9"];
      return {
        title: {
          text: "自有平台销售额构成",
          left: "left",
          top: 20,
          textStyle: {
            color: "#ccc"
          }
        },

        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            // colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            selectedMode: "single",
            radius: "55%",
            center: ["50%", "50%"],
            color: ["#e056fd", "#FBFE27", "#FE5050", "#1DB7E5"],
            clockwise: true,
            data: [
              { value: 335, name: "APP" },
              { value: 250, name: "小程序" },
              { value: 274, name: "PC" },
              { value: 250, name: "其他" }
            ],
            roseType: "radius",
            label: {
              normal: {
                formatter: ["{b|{b}}", "{d|{d}%}"].join("\n"),
                rich: {
                  b: {
                    color: "#fff",
                    fontSize: 15,
                    fontWeight: "bold",
                    lineHeight: 5
                  },
                  d: {
                    color: "#fff",
                    fontSize: 15,
                    height: 40
                  }
                }
              }
            },
            labelLine: {
              lineStyle: {
                color: "#fff"
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            },
            itemStyle: {
              normal: {
                shadowColor: "rgba(0, 0, 0, 0.8)",
                shadowBlur: 50
              }
            },
            emphasis: {
              itemStyle: {
                color: "rgb(131,249,103)"
              }
            }
          }
        ]
      };
    }
  }
};
</script>

<style lang="scss"></style>
