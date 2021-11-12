<template>
  <van-popup :show="visible" position="bottom" @clickOverlay="cancel" class="menu-popup-wrapper">
    <div class="flex">
      <span @click="cancel" class="menu-cancel">取消</span>
      <span @click="confirm" class="menu-confirm">确认</span>
    </div>
    <van-divider/>
    <div  class="menu-wrapper"  v-for="(item, index) in menus" :key="index">
      <div class="menu-title">{{item.title}}</div>
      <van-button plain v-for="(item1, index1) in item.options" :key="index1" :type="activeValue[index] == item1.value ? 'primary' : 'default'" @click="changeActive(item1, index)">
        {{item1.label}}
      </van-button>
    </div>
  </van-popup>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'MenuPicker',
  props: {
    menus: {
      type: Array,
      default: function () {
        return []
      }
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const values = []
    const texts = []
    const paramObj = {}
    const activeValue = ref(values)
    const activeText = ref(texts)
    // 匹配选中的菜单按钮
    let defaultLabel = ''
    props['menus'].forEach(item => {
      values.push(item.default)
      defaultLabel = item.options.filter(item1 => item1.value === item.default)[0].label
      texts.push(defaultLabel)
      paramObj[item.name] = item.default
    })
    
    // 点击选项更新active数据
    function changeActive(item, index) {
      paramObj[props['menus'][index]['name']] = item.value
      activeText.value[index] = item.label
      activeValue.value[index] = item.value
    }
    // 参数回传，同时回传对应的label
    function confirm() {
      context.emit('closePicker', {
        searchValue: paramObj,
        searchLabel: activeText.value
      })
    }
    function cancel () {
      context.emit('closePicker')
    }
    return {
      changeActive,
      confirm,
      cancel,
      activeValue,
      props
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu-popup-wrapper {
  padding-bottom: 30px;
}
.flex {
  display: flex;
  justify-content: space-between;
  padding: 30px 30px 0;
}
.menu-cancel {
  color: #969799;
  font-size: 28px;
}
.menu-confirm {
  color: #265bf5;
  font-size: 28px;
}
.menu-wrapper {
  margin: 0 30px 20px;
}
.menu-title {
    font-size: 28px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #333333;
    margin-bottom: 20px;
  }
  .van-button {
    min-width: 200px;
    white-space: nowrap;
    height: 72px;
    border-radius: 10px;
    padding: 0 10px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-size: 28px;
    display: inline-flex;
    flex: 1;
    justify-content: center;
    box-sizing: border-box;
    margin: 0 10px 20px;
  }
  .van-button:not(:last-child) {
    margin-right: 20px;
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
