/* 
  该文件是整个项目入口文件
*/
//引入vue
import Vue from 'vue'
//引入App组件,它是所有组件父组件
import App from './App.vue'
//关闭vue生产提示
Vue.config.productionTip = false

//创建vue实例对象 vm
new Vue({
  el:'#app',
  //将App组件放入容器中
  render: h => h(App),

  
  // render:q => q('h1','你好')
    // createElement('h1','你好')
    
  
  // template:`<App></App>`,
  // components:{ App },
})
