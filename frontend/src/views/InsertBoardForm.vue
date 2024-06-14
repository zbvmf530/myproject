<template>
    <div class="row">

    </div>
    <div class="container">
        <div class="input-group mb-3">
            <label class="form-label">title</label>
            <input class="form-control" name="title" v-model="board.title">
        </div>
        
        <div class="input-group mb-3">
            <label class="form-label">content</label>
            <input class="form-control" name="content" v-model="board.content">
        </div>
        
        <div class="input-group mb-3">
            <label class="form-label">writer</label>
            <input class="form-control" type="textarea" name="writer" v-model="board.writer">
        </div>

        <div class="input-group mb-3">
            <label class="form-label">첨부파일</label>
            <input class="form-control" type="file" name="avatar" ref="file" v-on:change="onChangeFileUpload()">
        </div>
        <button @click="addBoard" class = "btn btn-primary">등록</button>
    </div>
</template>
<script>
import axios from "axios";
const url='/api/board';
export default {
    data(){ return {
        board: {
            titile:'',
            content:'',
            writer:'',
        },
        file:''
    }; },
    created() {},
    methods:{
        async addBoard(){
            // 예외처리 필요
            //if()
            let formData = new FormData();
            formData.append('avatar', this.file);
            formData.append('title',this.board.title);
            formData.append('content',this.board.content);
            formData.append('writer',this.board.writer);
            let result = await axios.post(url,formData,
                {headers : {'Content-Type' : 'multipart/form-data'}})
                .then(data=>data);
            console.log(result.statusText);    
                if(result.statusText=="OK"){
                    alert("등록성공!");
                    this.$router.push('/board');
                }
        },
        onChangeFileUpload(){
            this.file=this.$refs.file.files[0];
        }
    }
}
</script>
<style></style>
    