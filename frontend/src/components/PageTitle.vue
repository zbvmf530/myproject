<template>
    <h1>{{ title }}</h1>
    <h1>{{ menuNo }}</h1>
    <h1>{{ this.$store.state.count }}</h1>
    <h1></h1>
</template>
<script>
export default {
    props:{
        'title':{
            type: String,
            default: '페이지 제목입니다.'
        },
        'menuNo':{
            type : Number,
            default : 7
        }
    }
}
</script>
<style></style>
    