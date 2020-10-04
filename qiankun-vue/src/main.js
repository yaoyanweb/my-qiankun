import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let instance = null;
function render(){
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
}
if(window.__POWERED_BY_QIANKUN__){
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
if(!window.__POWERED_BY_QIANKUN__){render()}
export async function bootstrap(){}
export async function mount(props){render();}
export async function unmount(){instance.$destroy();}