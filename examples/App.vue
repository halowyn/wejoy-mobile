<template>
  <button-group :btns="btnArr" :default="defaultBtn" @change="changeBtn"></button-group>
  <van-button type="primary" style="margin: 20px" @click="showMenuPicker">menu-picker</van-button>
  <menu-picker :menus="menus" :visible="menuVisible" @closePicker="closePicker"></menu-picker>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'App',
  setup() {
    const btnArr = [
      { 
        label: '按钮1',
        value: '1'
      },
      { 
        label: '按钮2',
        value: '2'
      },
      { 
        label: '按钮3',
        value: '3'
      },
      { 
        label: '按钮4',
        value: '4'
      }
    ]
    const defaultBtn = '1'
    const menus = [
      {
        title: '首单类型',
        default: '-',
        name: 'is_first',
        options: [
          {
            value: '-',
            label: '总计'
          },
          {
            value: '1',
            label: '首单'
          },
          {
            value: '0',
            label: '复借'
          }
        ]
      },
      {
        title: '时间粒度',
        default: 'week',
        name: 'st_type',
        options: [
          {
            value: 'day',
            label: '日'
          },
          {
            value: 'week',
            label: '周'
          },
          {
            value: 'month',
            label: '月'
          }
        ]
      },
    ]
    const menuVisible = ref(false)

    function changeBtn (activeVal) {
      console.log(activeVal)
    }
    function showMenuPicker () {
      menuVisible.value = true
    }
    function closePicker (obj) {
      console.log(obj)
      menuVisible.value = false
    }
    return {
      btnArr,
      defaultBtn,
      changeBtn,
      menuVisible,
      menus,
      showMenuPicker,
      closePicker
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
