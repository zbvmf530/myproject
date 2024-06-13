<template>
    <div><h2>ChildComponent4</h2></div>
    <button class="btn btn-primary" @click="sendParent">메세지 전송</button>
    <hr>
</template>

<script>
export default {
    data(){ return {msg:'자식컴포넌트로부터 보내는 메시지'}; },
    //mounted(){this.$emit('send-message',this.msg)},
    methods:{
        sendParent(){
            this.$emit('send-message',this.msg);
        }
    }
}
</script>
<style></style>
    