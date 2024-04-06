<template>
    <!-- BugHeader -->
    <div class="BugHeader">
        <input v-model.trim="bugInputStr" @keydown.enter="saveOneBug()"></input>
        <button @click="saveOneBug()">保存</button>
    </div> <br>
</template>


<script>
export default {
    name:'BugHeader',
    data() {
        return {
            id: 0,
            bugInputStr: '',
        }
    },
    props: ["bugList","saveOneBugCallBack"],//相当于this.bugList
    methods: {
        saveOneBug() {
            let bugItem = {
                id: this.id++,
                describe: this.bugInputStr,
                isDone: false,
                editState:false
            }
            //存入数组
            this.saveOneBugCallBack(bugItem)
            this.bugInputStr = ''
        }
    }
    
}
</script>


<style scoped>
/* 
   头部样式
*/
.BugHeader {
    input {
        width: 100%;
        font-size: xx-large;
    }

    /* 保存按钮样式 */
    button {
        cursor: pointer;
        border: 0px;
        font-size: medium;
        background-color: rgb(31, 255, 61);
    }

    button:hover {
        background-color: #0cae17;
    }
}
</style>