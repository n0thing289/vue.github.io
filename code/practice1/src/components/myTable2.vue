<template>
    <h1>世纪佳缘后台管理</h1>
    <el-table :data="forms">
        <el-table-column type="index" label="序号" />
        <el-table-column prop="name" label="姓名" />
        <el-table-column prop="sex" label="性别" />
        <el-table-column prop="age" label="年龄" />
        <el-table-column prop="birth" label="生日" />
        <el-table-column prop="isSingle" label="是否单身" />
        <el-table-column prop="interest" label="兴趣爱好" />
        <el-table-column prop="receiveOrtherLand" label="接受异地" />
        <el-table-column prop="desc" label="个人简介" />
        <el-table-column label="操作">
            <template v-slot="scope">
                <el-button type="primary" @click="showDetail(scope.row)">表单详情</el-button>
                <!-- <el-button type="danger">删除</el-button> -->
            </template>
        </el-table-column>
    </el-table>

    <el-dialog v-model="dialogVisible" title="客户详情">
        <el-form :model="form">
            <el-form-item label="姓名">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="性别">
                <el-select v-model="form.sex">
                    <el-option label="男" value="男"></el-option>
                    <el-option label="女" value="女"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="年龄">
                <el-input v-model="form.age"></el-input>
            </el-form-item>
            <el-form-item label="生日">
                <el-date-picker v-model="form.birth" type="date" value-format="YYYY-MM-DD"
                    format="YYYY-MM-DD"></el-date-picker>
            </el-form-item>
            <el-form-item label="是否单身">
                <el-switch v-model="form.isSingle" :active-value="'是'" :inactive-value="'否'" active-text="是"
                    inactive-text="否">
                </el-switch>
            </el-form-item>
            <el-form-item label="兴趣爱好">
                <el-checkbox-group v-model="form.interest">
                    <el-checkbox label="抽烟" value="抽烟" />
                    <el-checkbox label="喝酒" value="喝酒" />
                    <el-checkbox label="吃肥肉" value="吃肥肉" />
                    <el-checkbox label="看美女" value="看美女" />
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="接受异地">
                <el-radio v-model="form.receiveOrtherLand" label="接受" value="接受"/>
                <el-radio v-model="form.receiveOrtherLand" label="不接受" value="不接受"/>
            </el-form-item>
            <el-form-item label="个人简介">
                <el-input v-model="form.desc" type="textarea"></el-input>
            </el-form-item>  
        </el-form>
    </el-dialog>

</template>

<script>
import { mapState } from 'vuex';
export default {
    name:'myTable2',
    data(){
        return {
            dialogVisible:false,
            form:{}
        }
    },
    methods:{
        showDetail(row){
            this.dialogVisible = true
            this.form = row
        }
    },
    computed:{
        forms(){
            return this.$store.state.forms
        }
        // ...mapState('forms')
    }
}
</script>

<style>

</style>