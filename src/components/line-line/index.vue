<template>
  <div
    ref="lineLine"
    style="width: 1054px; height: 208px;border: 1px dashed rgb(255, 214, 0);"
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
      const chart = echart.init(this.$refs.lineLine);
      let option = this.getOption();
      chart.setOption(option);
    },
    getOption() {
      // Generate data
      var category = [];
      var category2 = [];
      var lineData = [];
      var line2Data = [];
      var backData = [];
      for (let i = 0; i < 100; i++) {
        let data = Math.round(Math.random() * 350);
        line2Data.push(data);
        category2.push(i + 1);
      }
      for (let i = 0; i < 24; i++) {
        let data = Math.round(Math.random() * 350);
        lineData.push({ value: data, visualMap: false });
        backData.push({ value: 600, visualMap: false });
        category.push(i + 1);
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
          itemWidth: 10,
          itemHeight: 10,
          borderRadius: 10,
          data: ["小时销售额", "累计销售额"],
          textStyle: {
            color: "#fff"
          },
          left: "18%",
          top: "2%"
        },
        grid: {
          x: "2%",
          y: "18%",
          width: "82%",
          height: "60%"
        },
        visualMap: [
          {
            show: false,
            top: 10,
            right: 10,
            pieces: [
              {
                gt: 0,
                lte: 50,
                color: "#096"
              },
              {
                gt: 50,
                lte: 100,
                color: "#76F4D6"
              },
              {
                gt: 100,
                lte: 150,
                color: "#63CAF8"
              },
              {
                gt: 150,
                lte: 200,
                color: "#3D8FBA"
              },
              {
                gt: 200,
                lte: 300,
                color: "#2665AC"
              },
              {
                gt: 300,
                color: "#2B76DF"
              }
            ],
            outOfRange: {
              color: "#2B76DF"
            }
          }
        ],
        xAxis: [
          {
            data: category,
            position: "bottom",
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
            min: 0,
            max: 600
          },
          {
            type: "value",
            show: false,
            min: 50,
            max: 600
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
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
              normal: {
                color: "#F08533"
              }
            },
            lineStyle: {
              normal: {
                width: 1,
                color: "#F08533"
              }
            },
            data: lineData
          },
          {
            name: "小时销售额",
            type: "line",
            showAllSymbol: true,
            symbol: "circle",
            symbolSize: 5,
            xAxisIndex: 1,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: "#2974F6"
              }
            },
            lineStyle: {
              width: 1
            },
            data: line2Data,
            markLine: {
              silent: true,
              symbolSize: 8,
              lineStyle: {
                color: "rgba(255, 255, 255, 0.2)",
                type: "solid"
              },
              data: [
                {
                  yAxis: 50
                },
                {
                  yAxis: 100
                },
                {
                  yAxis: 150
                },
                {
                  yAxis: 200
                },
                {
                  yAxis: 300
                }
              ]
            }
          },
          {
            name: "背景",
            type: "bar",
            barGap: "-100%",
            barWidth: 4,
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
              normal: {
                color: "rgba(255, 255, 255, .1)"
              }
            },
            z: -12,
            data: backData
          }
        ]
      };
    }
  }
};
</script>
