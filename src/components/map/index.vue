<template>
  <div
    ref="map"
    style="width: 1140px; height: 800px;border: 1px dashed rgb(255, 214, 0);"
  ></div>
</template>

<script>
import { geoCoordMap, data } from "@/commons/mapUtils";
import echart from "@/lib/echart";

export default {
  name: "Map",
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      const chart = echart.init(this.$refs.map);
      let option = this.getOption();
      chart.setOption(option);
    },
    getOption() {
      return {
        legend: {
          left: "left",
          data: ["强", "中", "弱"],
          textStyle: {
            color: "#ccc"
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{b}"
        },
        geo: {
          map: "china",
          show: true,
          roam: "scale",
          label: {
            show: true,
            color: "#fff",
            fontFamily: "PingFangSC-Medium'",
            fontSize: 12
          },
          emphasis: {
            show: true,
            label: {
              fontSize: 12,
              color: "#fff"
            },
            itemStyle: {
              areaColor: "#F6BB41"
            }
          },
          itemStyle: {
            normal: {
              areaColor: "transparent",
              borderColor: "#72FCFD"
            }
          },
          regions: [
            {
              name: "新疆",
              itemStyle: {
                areaColor: "#3E19B7",
                color: "#fff"
              }
            },
            {
              name: "内蒙古",
              itemStyle: {
                areaColor: "#435DF1",
                color: "#fff"
              }
            },
            {
              name: "黑龙江",
              itemStyle: {
                areaColor: "#3E19B7",
                color: "#fff"
              }
            },
            {
              name: "吉林",
              itemStyle: {
                areaColor: "#3F37D4",
                color: "#fff"
              }
            }
          ]
        },
        series: [
          {
            name: "前5",
            type: "effectScatter",
            coordinateSystem: "geo",
            data: this.convertData(
              data
                .sort(function(a, b) {
                  return b.value - a.value;
                })
                .slice(0, 9)
            ),
            symbolSize: function(val) {
              return val[2] / 20;
            },
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke"
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: false
              }
            },
            itemStyle: {
              normal: {
                color: "#C9CA83",
                shadowBlur: 10,
                shadowColor: "#333"
              }
            },
            zlevel: 1
          }
        ]
      };
    },
    convertData(data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value)
          });
        }
      }
      return res;
    }
  }
};
</script>
