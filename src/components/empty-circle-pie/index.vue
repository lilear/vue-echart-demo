<template>
  <div
    ref="pie"
    style="width: 206px; height: 182px;border: 1px dashed rgb(255, 214, 0);"
  ></div>
</template>

<script>
import echart from "@/lib/echart";

export default {
  name: "EmptyCirclePie",
  data() {
    return {
      currentIndex: -1
    };
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      var chart = echart.init(this.$refs.pie);
      let option = this.setOptions();
      chart.setOption(option);

      setInterval(() => {
        var dataLen = option.series[0].data.length;
        // 取消之前高亮的图形
        chart.dispatchAction({
          type: "pieUnSelect",
          seriesIndex: 0,
          dataIndex: this.currentIndex
        });
        this.currentIndex = (this.currentIndex + 1) % dataLen;
        // 高亮当前图形
        chart.dispatchAction({
          type: "pieSelect",
          seriesIndex: 0,
          dataIndex: this.currentIndex
        });
        // 显示 tooltip
        // chart.dispatchAction({
        //   type: "showTip",
        //   seriesIndex: 0,
        //   dataIndex: this.currentIndex
        // });
      }, 2500);
    },
    setOptions() {
      var colorList = [
        "rgb(255, 214, 0)",
        "rgb(0, 162, 255)",
        "rgb(105, 36, 254)",
        "rgb(202, 68, 251)",
        "rgb(255, 127, 0)",
        "rgb(0, 246, 255)"
      ];
      return {
        backgroundColor: "#090725",
        title: {
          text: "PieChart",
          x: "left",
          y: "top",
          textStyle: {
            fontSize: 20,
            color: "#fff"
          }
        },
        tooltip: {
          trigger: "item"
        },
        series: [
          {
            type: "pie",
            selectedMode: "single",
            center: ["50%", "50%"],
            radius: ["50%", "58%"],
            clockwise: true,
            avoidLabelOverlap: true,
            selectedOffset: 5,
            itemStyle: {
              normal: {
                color: function(params) {
                  return colorList[params.dataIndex];
                }
              }
            },
            label: {
              show: false
            },
            data: [
              {
                name: "自有平台",
                value: 17
              },
              {
                name: "大客户",
                value: 29
              },
              {
                name: "汽配龙",
                value: 24
              },
              {
                name: "门店货权",
                value: 12
              },
              {
                name: "非自有平台",
                value: 6
              },
              {
                name: "其他",
                value: 12
              }
            ]
          }
        ]
      };
    }
  }
};
</script>
