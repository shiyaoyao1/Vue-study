<template>
  <div>
      <h1 v-text='msg' ref='title'></h1>
      <button ref='btn' @click='showDOM'>点我输出上方DOM元素</button>
      <SchoolName ref='sch' />
      
  </div>
</template>

<script>
//引入SchoolName组件
import SchoolName from './components/SchoolName.vue'

export default {
    name:'App',
    components: { SchoolName },
    data() {
        return {
            msg:'欢迎欢迎,热烈欢迎!'
        }
    },
    methods: {
        showDOM(){
            console.log(this.$refs.title); //真实DOM元素
            console.log(this.$refs.btn); //真实DOM元素
            console.log(this.$refs.sch); //SchoolName组件的实例对象vc
        }
    },
}
</script>

<style>

</style>