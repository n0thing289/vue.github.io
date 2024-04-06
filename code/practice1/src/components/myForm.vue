<template>
    <h1>欢迎注册世纪佳缘</h1>
    <el-form>
        <el-form-item label="姓名">
            <el-input v-model="form.name" placeholder="请输入您的姓名" />
        </el-form-item>
        <el-form-item label="性别">
            <el-select v-model="form.sex" placeholder="请选择您的性别">
                <el-option label="男" value="男" />
                <el-option label="女" value="女" />
            </el-select>
        </el-form-item>
        <el-form-item label="年龄">
            <el-input v-model="form.age" placeholder="请输入您的年龄"></el-input>
        </el-form-item>
        <el-form-item label="出生日期">
            <el-date-picker v-model="form.birth" type="date" placeholder="选择出生日期" value-format="YYYY-MM-DD" format="YYYY-MM-DD"/>
        </el-form-item>
        <el-form-item label="单身">
            <el-switch v-model="form.isSingle" :active-value="'是'" :inactive-value="'否'" active-text="是" inactive-text="否"/>
        </el-form-item>
        <el-form-item label="兴趣爱好">
            <el-checkbox-group v-model="form.interest">
                <el-checkbox value="抽烟" label="抽烟" />
                <el-checkbox value="喝酒" label="喝酒" />
                <el-checkbox value="吃肥肉" label="吃肥肉" />
                <el-checkbox value="看美女" label="看美女" />
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="是否接受异地">
            <el-radio v-model="form.receiveOrtherLand" label="接受" value="接受" />
            <el-radio v-model="form.receiveOrtherLand" label="不接受" value="不接受" />
        </el-form-item>
        <el-form-item label="个人介绍">
            <el-input v-model="form.desc" placeholder="介绍一下你自己吧" type="textarea" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" size="default" @click="onsubmit()">提交</el-button>
            <el-button type="" size="default" @click="onsubmit()">取消注册</el-button>
        </el-form-item>

    </el-form>
</template>

<script>
import { succMsg } from '../utils/elmsg.js'
export default {
    name:'myForm',
    props:['size'],
    data(){
        return {
            form: {
                name:'',
                sex:'',
                age:'',
                birth:'',
                isSingle: false,
                interest:[],
                receiveOrtherLand:'',
                desc:''
            },
            interests:[
                {
                    id:0
                }
            ]
        }
    },
    methods:{
        onsubmit(){
            succMsg('注册成功')
            console.log(this.form)
            //保存到状态管理中
            this.$store.state.forms.push(this.form)
        }
    }
}
</script>

<style>
.el-form{
    width:500px;
    height: max-content;
    margin: auto;
}
</style>