<template>
    <!-- BugList -->
    <!-- BugItem -->
    <div class="BugListAndItem">
        <table>
            <thead>
                <tr>
                    <th><span>全选 </span><input type="checkbox" @click="toggleAll()" v-model="toggleAllValue"
                            :disabled="checkBoxDisable"></th>
                    <th>bug描述</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <BugItem v-for="bugItem, index in bugList" :key="bugItem.id" :bugItem="bugItem" :index="index"
                    :deleteOneBugCallBack="deleteOneBugCallBack"></BugItem>
                <!-- <tr><td><input type="checkbox" name="" id=""></td> <td><span>Bug信息描述2</span></td> <td><button>删除</button></td></tr>
                        <tr><td><input type="checkbox" name="" id=""></td> <td><span>Bug信息描述3</span></td> <td><button>删除</button></td></tr> -->
            </tbody>
        </table>
    </div> <br>
</template>

<script>
import BugItem from './BugItem.vue';
export default {
    name:"BugList",
    components:{
        BugItem:BugItem
    },
    data(){
        return {
            toggleAllValue: false,
        }
    },
    props: ['bugList',"deleteOneBugCallBack"],
    methods:{
        toggleAll() {
            let flag = 0
            this.bugList.forEach(element => {
                if (element.isDone === false) {
                    element.isDone = !element.isDone
                    flag++
                }
            });
            // 如果都选了, 再点全选直接取反
            if (flag === 0) { this.bugList.forEach(element => { element.isDone = !element.isDone }) }

        },
    },
    computed: {
        checkBoxDisable() {
            return this.bugList.length === 0 ? true : false
        }
    },
    watch: {
        bugList: {
            deep: true,
            handler(newList, oldList) {
                let isDoneListLength = newList.filter((e) => {
                    return e.isDone === true
                }).length
                this.toggleAllValue = isDoneListLength === newList.length && newList.length > 0 ? true : false
            }
        }
    }
}
</script>

<style>
/* 
    中间体样式
*/
.BugListAndItem {
    /* 了解flex布局!!!,这里是凑巧发现这样使用可以布局得很好看!! */
    display: flex;
    flex-direction: column;
    justify-content: center;

    /* 表格内单元格居中 */
    table tbody tr td {
        /* 
            水平对齐
                1. 对于行内元素  text-align: center;(添加到夫选择器)
                2. 对于块元素  margin:auto (添加到夫选择器)
        */
        text-align: center;
    }

    /*  */
    table {
        border-collapse: collapse;

        tr:hover {
            background-color: #f5f5f5;
        }

        /* tr:nth-child(even) {background-color: #f2f2f2;} */
        th {
            background-color: #2d2f2d;
            font-weight: bold;
            color: white;
        }

        th,
        td {
            border: 1px solid black;
        }

        button {
            border: 0px;
            background-color: tomato;
            cursor: pointer;
        }

        button:hover {
            background-color: #e53c3c;
        }

        input[type="checkbox"] {
            transform: scale(1.5);
        }
    }

}
</style>