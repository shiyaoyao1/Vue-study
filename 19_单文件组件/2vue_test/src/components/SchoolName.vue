<template>
  <div class="demo">
      <!-- <h1>{{msg}}</h1> -->
      <h2 >学校名字:{{name}}</h2>
      <!-- <h2>学生年龄:{{myAge}}</h2> -->
      <h2>学校地址:{{address}}</h2>
      <!-- <button @click='test'>点我测试hello方法</button> -->
      <!-- <button @click='changeAge'>尝试修改收到的年龄</button> -->
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'StudentName',
    data() {
        return {
            // msg:'加油学习Vue',
            // myAge:this.age
            name:'CQUPT',
            address:'重庆'
        }
    },
    mounted() {
        this.pubId = pubsub.subscribe('hello',function(msg,data){
            console.log(`有人发布了hello消息,hello消息的回调执行了 ${msg}  ${data}`)
        })
    },
    /* methods:{
        test(){
            this.hello()
        }
    } */
    //传入的参数最好别改
    

    // props:['name','gender','age'] //简单声明接收

    //接收的同时对数据类型进行限制
    /* props:{
        name:String,
        age:Number,
        gender:String
    } */

    //接收的同时对数据:类型限制+默认值指定+必要性限制
    /* props:{
        name:{
            type:String, //name类型是字符串
            required:true, //name是必要的
        },
        age:{
            type:Number,
            default:99 //默认值
        },
        gender:{
            type:String, //name类型是字符串
            required:true, //name是必要的
        },
    } */
    beforeDestroy() {
        pubsub.unsubscribe(this.pubId)
    },
}
</script>

<style scoped>
.demo{
    background-color: rgb(109, 182, 255);
}
</style>