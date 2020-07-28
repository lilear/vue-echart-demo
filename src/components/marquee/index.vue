<template>
  <div class="my-outbox" ref="outbox">
    <marquee :sendVal="name"/>
  </div>
</template>

<script>
import Marquee from './marquee'
export default {
  name: "my-marquee-left",
  data() {
    return {
      name: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'
    }
  },
  components: {
    Marquee
  }
};
</script>

<style lang="scss" scoped>
.my-outbox {
  width: 250px;
  height: 35px;
  color: #fff;
  background: #422b02;
}
</style>
