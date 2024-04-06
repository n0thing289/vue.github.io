<template>
    <h1>世纪佳缘后台管理</h1>
    <el-table :data="forms">
        <el-table-column prop="name" label="姓名" />
        <el-table-column prop="sex" label="性别" />
        <el-table-column prop="age" label="年龄" />
        <el-table-column prop="birth" label="生日" />
        <el-table-column prop="isSingle" label="是否单身" />
        <el-table-column prop="interest" label="兴趣爱好" />
        <el-table-column prop="receiveOrtherLand" label="接受异地" />
        <el-table-column prop="desc" label="个人简介" />
    </el-table>

</template>

<script>
export default {
    name:'myTable',
    data(){
        return {
            // forms: [
            //     {
            //         name: '1',
            //         sex: '1',
            //         age: '1',
            //         birth: '1',
            //         isSingle: '1',
            //         interest: [],
            //         receiveOrtherLand: '1',
            //         desc: '1'
            //     }
            // ]
        }
    },
    computed:{
        forms(){
            return this.$store.state.forms
        }
    }
}
</script>

<style>

</style>