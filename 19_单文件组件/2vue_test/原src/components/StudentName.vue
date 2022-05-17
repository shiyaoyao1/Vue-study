<template>
<!-- 组件的结构 -->
<div class="demo">
    <h2>名字:{{name}}</h2>
    <h2>年龄:{{age}}</h2> 
</div>
</template>

<script>
//交互相关代码(数据,方法等)
    export default {
        name:'StudentName',
        data(){
            return {
                name:'syy',
                age:21
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
