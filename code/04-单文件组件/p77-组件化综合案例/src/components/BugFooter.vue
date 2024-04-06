<template>
    <!-- BugFooter -->
    <div class="BugFooter">
        <button @click="clearByDone()">清除已解决</button>
        <span>当前Bug总量{{ bugList.length }}个,已解决{{ countCompleted }}个</span>
    </div>
</template>


<script>
export default {
    name:"BugFooter",
    props: ['bugList', 'clearByDoneCallBack','countCompleted'],
    methods:{
        clearByDone() {
            this.clearByDoneCallBack()
        }
    }
}
</script>


<style>
/* 
    脚部样式
*/
.BugFooter {
    button {
        border: 0px;
        background-color: tomato;
        cursor: pointer;
    }

    button:hover {
        background-color: #e53c3c;
    }

    span {
        font-size: small;
    }
}
</style>