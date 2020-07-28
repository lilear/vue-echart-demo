<template>
  <div
    ref="scatter"
    style="width: 448px; height: 414px;border: 1px dashed rgb(255, 214, 0);"
  ></div>
</template>

<script>
import echart from "@/lib/echart";

export default {
  name: "Scatter",
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      const chart = echart.init(this.$refs.scatter);
      let option = this.getOption();
      chart.setOption(option);
    },
    getOption() {
      var plantCap = [
        {
          name: "汽车装饰灯",
          value: "154"
        },
        {
          name: "安全座椅",
          value: "115"
        },
        {
          name: "保养",
          value: "113"
        },
        {
          name: "倒车雷达",
          value: "95"
        },
        {
          name: "轮胎",
          value: "92"
        },
        {
          name: "净化器",
          value: "87"
        },
        {
          name: "脚垫",
          value: "87"
        },
        {
          name: "胎压监测",
          value: "60"
        },
        {
          name: "行车记录仪",
          value: "87"
        },
        {
          name: "车载手机支架",
          value: "60"
        }
      ];

      var datalist = [
        {
          offset: [0, 45],
          symbolSize: 30,
          color: "#fc5c65"
        },
        {
          offset: [14, 56],
          symbolSize: 68,
          color: "#fd9644"
        },
        {
          offset: [35, 60],
          symbolSize: 70,
          color: "#fed330"
        },
        {
          offset: [55, 55],
          symbolSize: 45,
          color: "#26de81"
        },
        {
          offset: [16, 32],
          symbolSize: 100,
          color: "#2bcbba"
        },
        {
          offset: [45, 38],
          symbolSize: 87,
          color: "#45aaf2"
        },
        {
          offset: [0, 20],
          symbolSize: 30,
          color: "#4b7bec"
        },
        {
          offset: [11, 10],
          symbolSize: 60,
          color: "#a55eea"
        },
        {
          offset: [34, 13],
          symbolSize: 80,
          color: "#d1d8e0"
        },
        {
          offset: [57, 18],
          symbolSize: 60,
          color: "#575fcf"
        }
      ];
      var datas = [];
      for (var i = 0; i < plantCap.length; i++) {
        var item = plantCap[i];
        var itemToStyle = datalist[i];
        datas.push({
          name: item.name,
          value: itemToStyle.offset,
          symbolSize: itemToStyle.symbolSize,
          label: {
            normal: {
              textStyle: {
                fontSize: 14,
                color: "#fff"
              }
            }
          },
          itemStyle: {
            normal: {
              color: itemToStyle.color,
              opacity: itemToStyle.opacity
            }
          }
        });
      }
      return {
        grid: {
          show: false,
          top: 10,
          bottom: 10
        },
        xAxis: [
          {
            gridIndex: 0,
            type: "value",
            show: false,
            min: 0,
            max: 100,
            nameLocation: "middle",
            nameGap: 5
          }
        ],
        yAxis: [
          {
            gridIndex: 0,
            min: 0,
            show: false,
            max: 100,
            nameLocation: "middle",
            nameGap: 30
          }
        ],
        series: [
          {
            type: "scatter",
            symbol: "circle",
            symbolSize: 120,
            label: {
              normal: {
                show: true,
                formatter: "{b}",
                color: "#fff",
                textStyle: {
                  fontSize: "20"
                }
              }
            },
            itemStyle: {
              normal: {
                color: "#2974F6"
              }
            },
            data: datas
          }
        ]
      };
    }
  }
};
</script>
