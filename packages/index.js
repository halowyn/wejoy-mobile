import MenuPicker from './MenuPicker.vue'
const components = [MenuPicker]
const install = function(app) {
  components.forEach(item => {
    app.component(item.name, item)
  })
}
if(typeof window !== 'undefined' && window.Vue){
  install(window.Vue)
}
export default {
  install
}