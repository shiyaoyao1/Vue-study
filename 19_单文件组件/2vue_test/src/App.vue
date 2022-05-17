<template>
  <div>
    <!-- <StudentName @demo='getStudentName'/> -->
    <StudentName ref='student' />
    <hr>
    <SchoolName />
  </div>
</template>

<script>

import SchoolName from './components/SchoolName.vue'
import StudentName from './components/StudentName.vue'


export default {
    name:'App',
    components: { StudentName, SchoolName },
    data() {
      return {
        
      }
    },
    methods: {
      getStudentName(name){
        console.log('App收到了学校名字:',name);
      }
    },
    /* mounted(){
      this.$refs.student.$once('demo',this.getStudentName)
    } */
}
</script>

<style lang='less'>
.demo{
  background-color: pink;
  .qwe{
    font-size: 40px;
  }
}
</style>