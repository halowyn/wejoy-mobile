# wejoy-mobile

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

## 基于 vue3.0 + vantUI 创建的组件库

## components

### ButtonGroup 按钮组

| 属性/方法 |     说明     |                 类型                 |           默认值 |
| :-------- | :----------: | :----------------------------------: | ---------------: |
| btns      |  按钮选项组  | 对象数组[{label: 'aaa', value: 'a'}] |               [] |
| default   | 默认选中按钮 |            string/number             |               '' |
| change    | 点击按钮事件 |               function               | 回传选中的 value |

### MenuPicker 分组菜单弹窗组件

| 属性/方法   |           说明           |                                                类型                                                 | 默认值 |
| :---------- | :----------------------: | :-------------------------------------------------------------------------------------------------: | -----: |
| menus       |          菜单组          | 对象数组[{title: '首单类型',default: '-',name: 'is_first', options: [{value: '-',label: '总计' }] } |     [] |
| visible     |         是否展示         |                                               boolean                                               |  false |
| closePicker | 关闭弹窗回传选中菜单数组 |                                              function                                               |        |
