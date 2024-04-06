<script>
export default {
    // mounted() {
    //     console.log(this);
    //     console.log(this.$store)
    // },
    methods: {
        plus() {
            if (!this.$store.state.hasOwnProperty('num')){
                this.$store.state.num = 0
            }else{
                this.$store.state.num++
            }
            
        }
    }
}
</script>

<template>
    <button @click="plus()">count: {{ $store.state.num }}</button>
</template>


<style scoped></style>