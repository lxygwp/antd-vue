import Vue from "vue";
import Button from "ant-design-vue/lib/button";
import Icon from 'ant-design-vue/lib/icon'
import "ant-design-vue/dist/antd.css";
import App from "./App";


Vue.config.productionTip = false;
Vue.use(Icon)
Vue.use(Button)
new Vue({
  render: h => h(App),
}).$mount('#app')
