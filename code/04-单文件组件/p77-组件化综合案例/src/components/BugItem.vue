<template>
    <tr>
        <td><input type="checkbox" v-model="bugItem.isDone"></td>
        <td>
            <span class="clickThis" @click="edit(bugItem,$event)" v-show="!bugItem.editState">{{ bugItem.describe
                }}</span>
            <input type="text" v-model="bugItem.describe" v-show="bugItem.editState" ref="inputDesc"
                @blur="bugItem.editState = !bugItem.editState" />
        </td>
        <td><button @click="deleteOneBug(index)">删除</button></td>
    </tr>
</template>

<script>
export default {
    name:"BugItem",
    // 如果只需要从父组件获取数据, 子组件直接props,不需要data()
    props: ['bugItem', 'index','deleteOneBugCallBack'],
    methods:{
        deleteOneBug(index) {
            this.deleteOneBugCallBack(index)
        },
        edit(obj, event){
            obj.editState = true
            //同时让input获得焦点
            //vue需要方法全部执行完才会渲染页面
            this.$nextTick(function(){
                this.$refs['inputDesc'].focus()
            })
        }
    }
}
</script>

<style scoped>
.clickThis:hover{
    cursor: pointer;
}
</style>