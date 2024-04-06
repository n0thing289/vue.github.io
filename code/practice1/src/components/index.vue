<template>
    <router-link to="/container">布局容器</router-link>
    <router-link to="/form">form表单</router-link>
    <router-link to="/table">table表格</router-link>
    <el-menu mode="horizontal" :router="true">
        <el-menu-item index="/">
            <img style="width: 100px" src="../assets/element-plus-logo.svg" alt="">
        </el-menu-item>
        <el-menu-item index="/">主页面</el-menu-item>
        <el-sub-menu index="1">
            <template #title>Workspace</template>
            <el-menu-item index="/container">布局容器</el-menu-item>
            <el-menu-item index="/form">表单</el-menu-item>
            <el-sub-menu index="1-3">
                <template #title>表格</template>
                <el-menu-item index="/table">普通表格</el-menu-item>
                <el-menu-item index="/table2">获取行内数据表格</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="/dialog">对话框</el-menu-item>
        </el-sub-menu>
    </el-menu>

</template>

<script>
export default {
    name:'index',
    props:['index'],
}
</script>

<style>

</style>