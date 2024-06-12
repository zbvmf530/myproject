<template>
    <hr>
    <ul>
        <li v-for=" mn in menu" v-text="mn"></li>
    </ul>
    <hr>
</template>
<script>
export default {
    props:{
        'menu':{
            type:Object,
            default: function () {
                return ['defaultCloth1','defaultCloth2','defaultCloth3']                
            }
        }
    }
}
</script>
<style></style>
    