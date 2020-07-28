<template>
  <div class="container">
    <scroll-list :rawData="rawData" :loadCount="loadCount" />
  </div>
</template>

<script>
import ScrollList from './scrollList';
export default {
  name: "home",
  data() {
    return {
      rawData: [],
      loadCount: 0
    }
  },
  mounted() {
    this.mockData();
    this.loadCount++;

    setInterval(() => {
      this.mockData();
      this.loadCount++;
      console.log('mock new');
    }, 10000);
  },
  methods: {
    mockData() {
      for (let i = 0; i < 10; i++) {
        this.rawData.push({
          orderNum: i + 1,
          brand: "aaaaa",
          value: Math.round(Math.random() * 100)
        });
      }
    }
  },
  components: {
    ScrollList
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 500px;
  overflow: hidden;
}
</style>
