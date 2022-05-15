<template>
  <div >
      <!-- <h1>{{msg}}</h1> -->
      <h2 >学生名字:{{name}}</h2>
      <!-- <h2>学生年龄:{{myAge}}</h2> -->
      <h2>学生性别:{{gender}}</h2>
      <input type="text" v-fbind:value='name'>
      <!-- <button @click='changeAge'>尝试修改收到的年龄</button> -->
  </div>
</template>、

<script>
//引入一个混合

export default {
    name:'StudentName',
    data() {
        return {
            // msg:'加油学习Vue',
            // myAge:this.age
            name:'syy',
            gender:'男'
        }
    },
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

}
</script>

<style>

</style>