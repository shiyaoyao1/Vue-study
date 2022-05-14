<template>
<!-- 组件的结构 -->
<div class="demo">
    <h2>校名:{{name}}</h2>
    <h2>地区:{{address}}</h2> 
    <button @click='showName'>点我提示地区</button>
</div>
</template>

<script>
//交互相关代码(数据,方法等)
    export default {
        name:'SchoolName',
        data(){
            return {
                name:'CQUPT',
                address:'重庆'
            }
        },
        methods: {
            showName(){
                alert(this.address);
            }
        },
    }
</script>

<style>
/* 组件的样式 */
.demo{
    background-color: rgb(255, 162, 108);
}

</style>
