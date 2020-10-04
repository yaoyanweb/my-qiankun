import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {registerMicroApps,start} from 'qiankun'
Vue.use(ElementUI);
Vue.config.productionTip = false

const apps = [
  {
    // 子应用名字
    name:'vueApp',
    //默认会加载这个html 解析里面的js 动态执行，但是里面用的是fetch 所以需要子应用解决跨域问题
    entry:'//localhost:10000/', 
    // 需要挂载在哪个dom上
    container: '#vue',
    activeRule: '/vue',
  },
  {
    // 子应用名字
    name:'reactApp',
    //默认会加载这个html 解析里面的js 动态执行，但是里面用的是fetch 所以需要子应用解决跨域问题
    entry:'//localhost:20000/', 
    // 需要挂载在哪个dom上
    container: '#react',
    activeRule: '/react',
  },
];
// 注册
registerMicroApps(apps);

start();
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

