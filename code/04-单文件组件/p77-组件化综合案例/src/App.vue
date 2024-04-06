<script>
import BugHeader from './components/BugHeader.vue';
import BugList from './components/BugList.vue';
import BugFooter from './components/BugFooter.vue';
export default {
    name:"App",
    data() {
        return {
            bugList: [
                // { id: 0, describe: '1', isDone: false },
                // { id: 1, describe: '1', isDone: false },
                // { id: 2, describe: '1', isDone: false }
            ],
            countCompleted:0
        }
    },
    methods:{
        saveOneBugCallBack(bugItem){
            this.bugList.unshift(bugItem)
        },
        deleteOneBugCallBack(index){
            this.bugList.splice(index, 1)
        },
        clearByDoneCallBack() {
            this.bugList = this.bugList.filter((e) => {
                if (e.isDone === true) {
                    this.countCompleted++//统计已解决的bug数
                }
                return e.isDone === false//留下没解决得, 解决得会被删掉
            })
        }
    },
    components:{
        BugHeader:BugHeader,
        BugList:BugList,
        BugFooter:BugFooter
    }
}
</script>

<template>
    <div class="flex">
        <!-- BugHeader -->
        <BugHeader :bugList="bugList" :saveOneBugCallBack="saveOneBugCallBack"></BugHeader>
        <!-- BugBody -->
        <BugList :bugList="bugList" :deleteOneBugCallBack="deleteOneBugCallBack"></BugList>
        <!-- BugFooter -->
        <BugFooter :bugList="bugList" :clearByDoneCallBack="clearByDoneCallBack" :countCompleted="countCompleted">
        </BugFooter>
    </div>
</template>

<style scoped>
.flex {
    width: calc(50vw);
}
</style>
