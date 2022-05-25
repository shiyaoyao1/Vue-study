<template>
  <div>
    <button @click='getStudents'>获取学生信息</button><br>
    <input type="text" v-model='keyword'>
    <button @click='getUsers'>搜索</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'App',
    data() {
      return {
        keyword:''
      }
    },
    methods: {
      getStudents(){
        axios.get('http://localhost:8080/api/students').then(
          response => {
            console.log('请求成功',response.data)
            },
          error => {
            console.log('请求失败',error.message)
            }
        )
      },
      getUsers(){
        axios.get(`http://api.github.com/search/users?q=${this.keyword}`).then(
          response => {
            console.log('请求成功',response.data)
            },
          error => {
            console.log('请求失败',error.message)
            }
        )
      },
    },
}
</script>
