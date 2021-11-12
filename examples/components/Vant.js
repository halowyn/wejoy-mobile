import { App } from 'vue'
import {
  Button,
  List,
  PullRefresh,
  Tabbar,
  TabbarItem,
  DropdownMenu,
  DropdownItem,
  DatetimePicker,
  Tab,
  Tabs,
  Divider,
  Dialog,
  Swipe,
  SwipeItem,
  Image as VanImage,
  Form,
  Field,
  NavBar,
  Icon,
  Cell,
  Popup,
  CellGroup,
  Grid,
  GridItem,
  Skeleton,
  Toast
} from 'vant'

// https://vant-contrib.gitee.io/vant/v3/#/zh-CN
const plugins = [
  Button,
  List,
  Tabbar,
  TabbarItem,
  Tab,
  Tabs,
  Dialog,
  Divider,
  Swipe,
  SwipeItem,
  VanImage,
  PullRefresh,
  DropdownMenu,
  DropdownItem,
  DatetimePicker,
  Form,
  Field,
  NavBar,
  Icon,
  Cell,
  Popup,
  CellGroup,
  Grid,
  GridItem,
  Skeleton,
  Toast
]

export default {
  install: function () {
    plugins.forEach(item => {
      App.component(item.name, item)
    })
  }
}
