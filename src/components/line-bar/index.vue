<template>
  <div
    ref="lineline"
    style="width: 1054px; height: 208px;border: 1px dashed rgb(255, 214, 0);"
  ></div>
</template>

<script>
import echart from "@/lib/echart";

export default {
  name: "LineBar",
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      const chart = echart.init(this.$refs.lineline);
      let option = this.getOption();
      chart.setOption(option);
    },
    getOption() {
      // Generate data
      var category = [];
      var lineData = [];
      var barData = [
        4600,
        5000,
        5500,
        6500,
        7500,
        8500,
        9900,
        12500,
        14000,
        21500,
        23200,
        24450,
        25250,
        33300,
        4600,
        5000,
        5500,
        6500,
        7500,
        8500,
        9900,
        22500,
        14000,
        21500,
        8500,
        9900,
        12500,
        14000,
        21500,
        23200,
        24450,
        25250,
        7500
      ];
      var rateData = [];
      for (var i = 0; i < 24; i++) {
        var date = i + 1;
        category.push(date);
        var rate = barData[i] / 35000;
        rateData[i] = rate.toFixed(2);
        lineData.push(35000);
      }
      return {
        backgroundColor: "#090725",
        title: {
          text: "当日各时段&累计销售额",
          x: "left",
          y: 0,
          textStyle: {
            color: "#B4B4B4",
            fontSize: 16,
            fontWeight: "normal"
          }
        },
        tooltip: {
          trigger: "axis",
          backgroundColor: "rgba(255,255,255,0.1)",
          axisPointer: {
            type: "shadow",
            label: {
              show: true,
              backgroundColor: "#7B7DDC"
            }
          }
        },
        legend: {
          itemStyle: {},
          itemWidth: 15,
          itemHeight: 10,
          data: ["小时销售额", "累计销售额"],
          textStyle: {
            color: "#fff"
          },
          left: "30%",
          top: "78%"
        },
        grid: {
          x: "0",
          y: "8%",
          width: "82%",
          height: "60%"
        },
        xAxis: {
          data: category,
          axisLine: {
            show: false,
            lineStyle: {
              color: "#fff"
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: [
          {
            show: false
          },
          {
            show: false
          }
        ],

        series: [
          {
            name: "累计销售额",
            type: "line",
            smooth: true,
            showAllSymbol: true,
            symbol: "circle",
            symbolSize: 5,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: "#F08533"
              }
            },
            lineStyle: {
              width: 1
            },
            data: rateData
          },
          {
            name: "小时销售额",
            type: "bar",
            barWidth: 10,
            itemStyle: {
              normal: {
                color: new echart.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#70E2FB"
                  },
                  {
                    offset: 1,
                    color: "#49ADF8"
                  }
                ])
              }
            },
            data: barData
          },

          {
            name: "背景",
            type: "bar",
            barGap: "-100%",
            barWidth: 10,
            itemStyle: {
              normal: {
                color: "rgba(255, 255, 255, .1)"
              }
            },
            z: -12,
            data: lineData
          }
        ]
      };
    }
  }
};
</script>
