<template>
    <div>
        <h3 v-text="'전달받은 길이 = '+itemLength"></h3>
    </div>
</template>
<script>
export default {
    inject:['itemLength'],
    mounted(){
        console.log(this.itemLength);
    }
}
</script>
<style></style>
    