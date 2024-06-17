<template>
    <h1>게시판</h1>
    <div class="row">
        <div class="border p-3">
            <select v-model="perPage" @change="changeUnitCount()">
        <option v-for="perPage in perPageList" :key="perPage.id" :value="perPage.value">{{ perPage.value }}</option>
    </select>
    </div>
     <table class="table table-dark table-hover">
        <thead>
            <tr>
                <th>no</th>
                <th>title</th>
                <th>content</th>
                <th>writer</th>
                <th>image</th>
                <th>uploadfilename</th>
                <th>수정</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="brd in boards">
                <td v-text="brd.no"></td>
                <td v-text="brd.title"></td>
                <td v-text="brd.content"></td>
                <td v-text="brd.writer"></td>
                <td ><img :src= "getImage(brd.uploadfilename)" @error="replaceImg" width="80px"></td>
                <td v-text="brd.uploadfilename"></td>
                <td><button class="btn btn-primary" @click="gotoUpdateForm(brd.no)">수정</button></td>
            </tr>
        </tbody>
    </table>
    <Paging :page :perPage @go-page="goPage"></Paging>
        </div>
        <div class="row">
            <button class="btn btn-primary" @click="addBoard">글 등록</button>
        </div>
</template>
<script>
import axios from "axios"
import Paging from '@/components/PagingComponent.vue';
import PageMixin from '../mixin.js';
const url='/api/board?page=1';
export default {
    mixins:[PageMixin],
    data(){ return {
        boards: [],
        page:{},
        perPage: 2,
        boardCount:'', 
        perPageList: [
                            {
                            id:1,
                            value: 2,
                            },
                            {
                            id:2,
                            value: 5,
                            },
                            {
                            id:3,
                            value: 10,
                            }
                        ]
     }; },
    components:{Paging},
    watch: {
        perPage() {
        //console.log(this.perPage) // 5, 10, 15 가 콘솔에 찍힌다.
        }
    },
    created(){
        this.goPage(1,this.perPage);
    },
    methods:{
        getImage(filNm){
            console.log(filNm);
            return "d:/upload/"+filNm; 
        },
        replaceImg(e) {
                e.target.src = require(`../assets/logo.png`);
        },
        gotoUpdateForm(brdNo){this.$router.push(`/updateBoardForm/${brdNo}`)},
        changeUnitCount(){
            //console.log(event.target.value);
            this.goPage(1,this.perPage);
        },
        async goPage(page,pUnit){
            console.log("페이지 유닛 : "+pUnit);
            if(pUnit == null)pUnit=this.perPage;
            let pageUnit = pUnit;
            let result = await axios.get('/api/board?pageUnit='+`${pageUnit}&page=${page}`);
            this.boards = result.data.boardList;
            this.boardCount = result.data.count;
            this.page = this.pageCalc(page,this.boardCount,5,pageUnit);

        },
        addBoard(){
            this.$router.push('/addBoardForm');
        }

    }
    
}
</script>
<style></style>
    