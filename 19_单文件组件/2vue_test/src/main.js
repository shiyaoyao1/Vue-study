//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
import axios from 'axios'
//引入混入
// import {mixin} from './mixin'

//关闭Vue生产提示
Vue.config.productionTip = false

//全局混入
// Vue.mixin(mixin)

//引入插件
// import plugins from './plugins'

//应用插件
// Vue.use(plugins,1,2,3)

//创建vue实例
new Vue({
    el:'#app',
    render: h => h(App)
})
