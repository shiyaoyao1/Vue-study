<template>
  <div>
    <StudentName />
    <hr>
    <SchoolName />
  </div>
</template>

<script>

import StudentName from './components/StudentName.vue'
import SchoolName from './components/SchoolName.vue'

export default {
    name:'App',
    components: { StudentName, SchoolName },
    
}
</script>

<style>

</style>