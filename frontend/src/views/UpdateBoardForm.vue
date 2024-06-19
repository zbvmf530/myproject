<template>
    <h1>게시글 수정</h1>
    <div class="row">
     <table class="table table-striped-columns table-hover">
        <thead>
            <tr>
                <th>no</th>
                <th v-text="brd.no"></th>
                <th>title</th>
                <th v-text="brd.title"></th>
            </tr>
            <tr>
                <th>content</th>
                <th colspan="3" v-text="brd.content"></th>
            </tr>
        </thead>
        <tbody>
                <td ><img ref="target" :src= "getImage()" width="200px"></td>
        </tbody>
    </table>
        </div>
        <div class="row">
            <button class="btn btn-primary" @click="UpdateBoard">수정</button>
            <button class="btn btn-primary" @click="gotoList">목록으로</button>
        </div>
</template>
<script>
import axios from 'axios';
const url='/api/board';
let result;
export default {
    data(){ return {brd:[], encoded:''}; },
    created() {
        this.getBoard();
        //console.log("test");
        //console.log(this.brd);
        //this.brd = result.data;
    },
    methods:{
        async getBoard(){
            const params = this.$route.params.no;
            result = await axios.get(url+`/${params}`).then(res=>res);
            console.log(result);
            this.brd = result.data[0][0];
            this.encoded =  result.data[1];
            console.log(this.encoded);
            // const reader = new FileReader();
        },
        getImage(){
 
            //console.log(filNm);
            return `data:image/png;base64,${this.encoded}`;
            //return "d:/upload/"+filNm; 
        },
        replaceImg(e) {
            //console.log(e.target.src);
                e.target.src = require(`../assets/logo.png`);
        }
    }
}
</script>
<style></style>
    