<template>
  <el-container style="height: 100%;">
  <el-aside width="200px" height="100%" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']" router>
      <div v-for="( v, k ) in items" :key="k">
        <el-submenu :index="`${k}`" v-if="v.children">
          <template slot="title"><i :class="v.icon"></i>{{v.title}}</template>
          <el-menu-item-group >
            <el-menu-item v-for="( vChild, kChild ) in v.children" :key="kChild" :index="`${k}-${kChild}`" :route="{name: vChild.link}">
              <i :class="vChild.icon"></i>
              {{vChild.title}}
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item :index="`${k}`" :route="{name: v.link}" v-else>
          <template slot="title">
            <i :class="v.icon"></i>
            {{v.title}}
          </template>
        </el-menu-item>
      </div>
    </el-menu>
  </el-aside>
  
  <el-container style="backgroundColor: #090725">
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
  name: "Layout",
  data:() => ({
    items: [
      {
        title: "Empty Circle Pie",
        link: "EmptyCirclePie"
      },
      {
        title: "Solid Pie",
        link: "SolidPie"
      },
      {
        title: "Line Bar",
        link: "LineBar"
      },
      {
        title: "Scatter",
        link: "Scatter"
      },
      {
        title: "Map",
        link: "Map"
      },
      {
        title: "Spin Anim",
        link: "SpinAnim"
      },
      {
        title: "Count To",
        link: "CountTo"
      },
      {
        title: "Marquee",
        link: "Marquee"
      },
      {
        title: "Scroll List",
        link: "ScrollList"
      },
      {
        title: "Line Line ",
        link: "LineLine"
      },
      {
        title: "Line Area",
        link: "LineArea"
      },
      {
        title: "Horizon Bar",
        link: "HorizonBar"
      },
      {
        title: "Spin Text",
        link: "SpinText"
      },
      {
        title: "Card Bar",
        link: "CardBar"
      }
    ]
  })
}
</script>

<style scoped>

</style>