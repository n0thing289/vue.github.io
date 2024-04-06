<template>
    <el-button type="primary" @click="dialogVisible1 = !dialogVisible1">详情</el-button>
    <el-dialog v-model="dialogVisible1" title="普通的对话框">
        <span>这是一个普通的对话框</span>
        <template #footer>
            <div>
                <el-button @click="dialogVisible1 = false">Cancel</el-button>
                <el-button type="primary" @click="dialogVisible1 = false">
                    Confirm
                </el-button>
            </div>
        </template>
    </el-dialog>

    <el-button type="primary" @click="dialogVisible2 = !dialogVisible2">对话框里的表格</el-button>
    <el-dialog v-model="dialogVisible2" title="对话框里的表格">
        <el-table :data="forms">
            <el-table-column prop="name" label="姓名"/>
            <el-table-column prop="sex" label="性别" />
            <el-table-column prop="age" label="年龄" />
            <el-table-column prop="birth" label="生日" />
            <el-table-column prop="isSingle" label="是否单身" />
            <el-table-column prop="interest" label="兴趣爱好" />
            <el-table-column prop="receiveOrtherLand" label="接受异地" />
            <el-table-column prop="desc" label="个人简介" />
        </el-table>
    </el-dialog>

</template>

<script>
export default {
    name:'myDialog',
    data(){
        return {
            dialogVisible1:false,
            dialogVisible2:false,
            dialogVisible3:false,
            dialogVisible4:false
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