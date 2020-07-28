<template>
  <div class="card-bar-demo__container">
    <card
      :cardStyle="{
        backgroundColor: '#24262C',
        width: '286px',
        height: '135px',
        padding: '10px'
      }"
      tiDirection="row"
      :titleStyle="{
        color: '#fff',
        fontSize: '24px',
        fontWeight: 'bold',
        textAlign: 'left',
        paddingTop: '22px',
        paddingLeft: '10px'
      }"
      :dataStyle="{
        color: '#437AF5',
        fontSize: '53px',
        fontWeight: 'bold',
        paddingLeft: '10px'
      }"
      :unitStyle="{
        color: '#737373',
        fontSize: '17px',
        fontWeight: 'bolder',
        marginBottom: '15px'
      }"
      pbDirection="column"
      :itemBarStyle="{
        height: '20px',
        marginTop: '10px'
      }"
      :barColors="[
        { type: 'ios', color: '#3D6CD4' },
        { type: 'android', color: '#D3933F' }
      ]"
      :item="item"
    />
    <card
      :cardStyle="{
        backgroundColor: '#E3445E',
        width: '286px',
        height: '145px'
      }"
      tiDirection="column"
      :titleStyle="{
        color: '#fff',
        fontSize: '24px',
        fontWeight: 'bold',
        paddingTop: '22px',
        textAlign: 'left',
        paddingLeft: '10px'
      }"
      :dataStyle="{
        color: '#fff',
        fontSize: '53px',
        fontWeight: 'bold',
        paddingLeft: '10px'
      }"
      :unitStyle="{
        color: '#fff',
        fontSize: '17px',
        fontWeight: 'bolder',
        marginBottom: '15px'
      }"
      pbDirection="row"
      :itemBarStyle="{
        height: '20px'
      }"
      :barColors="[
        { type: 'ios', color: '#3D6CD4' },
        { type: 'android', color: '#D3933F' }
      ]"
      :item="item"
    />
  </div>
</template>

<script>
import Card from "./card";
export default {
  name: "CardBar",
  data() {
    return {
      item: {
        info: {
          title: "订单量",
          value: "32425",
          unit: "单"
        },
        bar: {
          android: 40,
          ios: 75
        }
      }
    };
  },
  components: {
    Card
  }
};
</script>

<style lang="scss" scoped>
.card-bar-demo__container {
  width: 500px;
  height: 800px;
  border: 1px dashed rgb(255, 214, 0);
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-items: center;
}
</style>
