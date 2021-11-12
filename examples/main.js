import { createApp } from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import ButtonGroup from './components/ButtonGroup'
import MenuPicker from './components/MenuPicker'
// import vant from './components/Vant.js'
import WejoyMobile from '../packages'
createApp(App).use(Vant).use(WejoyMobile)
.component('button-group', ButtonGroup)
.component('menu-picker', MenuPicker)
.mount('#app')
