<template>
  <div
    ref="lineBar"
    style="width: 977px; height: 435px;border: 1px dashed rgb(255, 214, 0);"
  ></div>
</template>

<script>
import echart from "@/lib/echart";

export default {
  name: "LineLine",
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      const chart = echart.init(this.$refs.lineBar);
      let option = this.getOption();
      chart.setOption(option);
    },
    getOption() {
      // Generate data
      var category = [];
      var category2 = [];
      var lineData = [];
      var line2Data = [];
      for (let i = 0; i < 100; i++) {
        let data = Math.round(Math.random() * 150);
        line2Data.push(data);
        category2.push(i + 1);
      }
      for (let i = 0; i < 100; i++) {
        let data = Math.round(Math.random() * 350);
        lineData.push({ value: data, visualMap: false });
        category.push(i + 1);
      }

      return {
        backgroundColor: "#090725",
        title: {
          text: "UV&销售趋势",
          x: "left",
          y: 0,
          textStyle: {
            color: "#fff",
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
          textStyle: {
            fontSize: 20,
            color: "#fff"
          },
          itemWidth: 25,
          itemHeight: 25,
          borderRadius: 25,
          data: ["UV", "销售额"],
          left: "38%",
          bottom: "5%"
        },
        grid: {
          x: "2%",
          y: "5%",
          width: "95%",
          height: "80%"
        },
        xAxis: [
          {
            data: category,
            show: false,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            }
          },
          {
            data: category2,
            show: false,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            show: false,
            max: 500
          },
          {
            type: "value",
            show: false,
            max: 500
          }
        ],
        series: [
          {
            name: "UV",
            type: "line",
            showSymbol: false,
            symbol: "circle",
            yAxisIndex: 0,
            itemStyle: {
              normal: {
                color: "#437AF5"
              }
            },
            lineStyle: {
              normal: {
                width: 1,
                color: "#437AF5"
              }
            },
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgb(55, 121, 253)" // 0% 处的颜色
                  },
                  {
                    offset: 0.6,
                    color: "rgba(55, 121, 253, 0.5)" // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              }
            },
            data: lineData,
            z: -12
          },
          {
            name: "销售额",
            type: "line",
            showSymbol: false,
            symbol: "circle",
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: "#F29E56"
              }
            },
            areaStyle: {
              color: "rgb(255, 154, 68)",
              opacity: 1
            },
            lineStyle: {
              normal: {
                width: 1,
                color: "#F29E56"
              }
            },
            data: line2Data
          }
        ]
      };
    }
  }
};
</script>
