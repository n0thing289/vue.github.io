<script>
export default {
    name: 'myContainer',

}
</script>

<template>
    <div class="root">
        <!--  -->
        <h1>1</h1>
        <el-container class="container01">
            <el-header> <span>Header</span> </el-header>
            <el-main> <span>Main</span> </el-main>
        </el-container>
        <h1>2</h1>
        <el-container class="container01">
            <el-header> <span>Header</span></el-header>
            <el-main> <span>Main</span></el-main>
            <el-footer> <span>Footer</span></el-footer>
        </el-container>
        <h1>3</h1>
        <el-container class="container01">
            <el-aside style="height:100%"><span>Aside</span></el-aside>
            <el-main style="height:100%"><span>Main</span></el-main>
        </el-container>
        <h1>4</h1>
        <el-container class="container01">
            <el-header><span>Header</span></el-header>
            <el-container>
                <el-aside style="height:100%"><span>Aside</span></el-aside>
                <el-main style="height:100%"><span>Main</span></el-main>
            </el-container>
        </el-container>
        <h1>5</h1>
        <el-container class="container01">
            <el-header><span>Header</span></el-header>
            <el-container>
                <el-aside style="height: 100%;"><span>Aside</span></el-aside>
                <el-container>
                    <el-main><span>Main</span></el-main>
                    <el-footer><span>Footer</span></el-footer>
                </el-container>
            </el-container>
        </el-container>
        <h1>6</h1>
        <el-container class="container01">
            <el-aside style="height:100%"><span>Aside</span></el-aside>
            <el-container>
                <el-header><span>Header</span></el-header>
                <el-main><span>
                        Main
                    </span></el-main>
            </el-container>
        </el-container>
        <h1>7</h1>
        <el-container class="container01">
            <el-aside style="height:100%"><span>Aside</span></el-aside>
            <el-container>
                <el-header><span>Header</span></el-header>
                <el-main><span>Main </span></el-main>
                <el-footer><span>Footer</span></el-footer>
            </el-container>
        </el-container>
    </div>

</template>

<style scoped>
.el-container * {
    color: whitesmoke;
}

.container01 {
    width: 500px;
    height: 200px;
}

.el-header,
.el-footer {
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: rgb(16, 142, 188);
}

.el-main {
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: rgb(49, 71, 103);
}

.el-aside {
    width: max-content;
    height: 70%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: rgb(22, 115, 149);
}
</style>
