<template>
 <div class="btn-group-wrapper">
  <van-button v-for="(item, index) in btns" :key="index" plain :type="active === item.value ? 'primary' : 'default'" @click="changeActive(item.value)">{{item.label}}</van-button>
 </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ButtonGroup',
  props: {
    btns: {
      type: Array,
      default: function () {
        return []
      }
    },
    default: {
      type: String || Number,
      default: 1
    }
  },
  setup(props, context) {
    const active = ref(props['default'])
    function changeActive(value) {
      active.value = value
      context.emit('change', value)
    }
    return {
      changeActive,
      active
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-group-wrapper {
  display: flex;
  justify-content: space-between;
}
.van-button {
  white-space: nowrap;
  height: 72px;
  border-radius: 10px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-size: 28px;
  display: inline-flex;
  flex: 1;
  justify-content: center;
  box-sizing: border-box;
  margin: 0 10px;
}
.van-button--primary {
  background: #EFF3FE;
  color: #265BF5;
  border: 1px solid #265BF5;
  font-weight: 600;
}
.van-button--plain.van-button--primary {
  color: #265BF5;
}
.van-button--default {
  background: #F2F2F2;
  font-family: PingFangSC-Regular, PingFang SC;
  color: #333;
  border: none;
  font-weight: 400;
}
</style>
