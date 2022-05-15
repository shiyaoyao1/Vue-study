import Vue from "vue";

export default {
    install(Vue){
        console.log("已安装插件");

        //全局过滤器
        Vue.filter('mySlice',function(value){
            return value.slice(0,4)
        })

        //定义全局指令
        Vue.directive('fbind',{
            //指令与元素成功绑定时(一上来)
            bind(element,binding){
                element.value = binding.value
            },
            //指令所在元素被插入页面时
            inserted(element,binding){
                element.focus()
            },
            //指令所在模板更新或重新解析时
            update(element,binding){
                element.value = bingding.value
            }
        })
        
        //定义混入
        Vue.mixin({
            data() {
                return {
                    x:20,
                    y:30
                }
            },
        })
        
        //给Vue原型上添加方法(vm和vc都能用)
        Vue.prototype.hello = ()=> {alert('你调用了hello方法')}
    }
}
