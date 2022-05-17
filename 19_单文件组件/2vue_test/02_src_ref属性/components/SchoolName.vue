<template>
  <div class="schoolBg">
      <h2>学校名字:{{name}}</h2>
      <h2>学校地址:{{address}}</h2>
  </div>
</template>

<script>
export default {
    name:'SchoolName',
    data() {
        return {
            name:'CQUPT',
            address:'重庆'
        }
    },
}
</script>

<style>
.schoolBg{
    background-color: rgb(247, 146, 146);
}
</style>