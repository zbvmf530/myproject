<template>
    <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item" v-show="laquoCheck">
      <a class="page-link" href="#" aria-label="Previous" @click.prevent="goPrevious()">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item" v-for="(page,idx) in pageArr"><a class="page-link" href="#" @click.prevent="clickedPage(page)">{{ page }}</a></li>
    
    <li class="page-item" v-show="raquoCheck">
        <a class="page-link" href="#" aria-label="Next" @click.prevent="goNext()">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
</template>
<script>
let pages = [];
export default {
    data(){ return {}; },
    computed:{
         pageArr(){
             pages = [];
            console.log(this.page);
            for(let i=this.page.startIdx;i<=this.page.endIdx;i++){
                pages.push(i);
            }
            return pages;
        },
        laquoCheck(){
            return this.page.currentPage * this.page.startIdx-1 > this.page.firstPage; 
        },
        raquoCheck(){
            return this.page.currentPage*this.page.endIdx+1 < this.page.lastPage; 
        }
    },
    watch(){
        
    },
    created() {

    },
    props:{
        'page' : {
        "currentPage":'',
        "firstPage":'',
        "startIdx":'',
        "endIdx":''
        },
        'perPage':''
    },
    methods:{
        clickedPage(pageNo){
            //console.log("클릭한 페이지 : "+pageNo);
            this.$emit('go-page',pageNo,this.perPage);
        },
        goPrevious() {
            if (this.page.currentPage * this.page.startIdx-1 > this.page.firstPage) {
                console.log("goPrev호출");
            this.$emit('go-page', this.page.currentPage * this.page.startIdx - 1),this.perPage;
            }
        },
        goNext() {
            if (this.page.currentPage*this.page.endIdx+1 < this.page.lastPage) {
                console.log("gonext호출");

            this.$emit('go-page', this.page.currentPage*this.page.endIdx + 1,this.perPage);
            }
        }
    }
}
</script>
<style></style>
    