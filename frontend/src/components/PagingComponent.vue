<template>
    <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item" v-show="laquoCheck">
      <a class="page-link" href="#" aria-label="Previous" @click.prevent="goPrevious()">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item" v-for="(page,idx) in pageArr">
        <a class="page-link " :class="{active: activePage==page}" href="#" @click.prevent="clickedPage(page)">{{ page }}</a></li>
    
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
    data(){ return { activePage : '', raquoCheck:false,laquoCheck:false}; },
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
            return this.activePage > 5; 
        },
        raquoCheck(){
            return this.page.endIdx<this.page.lastPage; 
        }   
    },
    watch:{
        page(){
            this.activePage = this.page.currentPage;
            console.log('활성화된 페이지넘버 : '+ this.activePage);
        }
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
            console.log(this.page.startIdx);
            let reCalc = (this.page.startIdx-1);
            if (reCalc > this.page.firstPage) {
                console.log("goPrev호출");
            this.$emit('go-page', Math.floor(reCalc),this.perPage);
            }
        },
        goNext() {
            let reCalc = Number(this.page.endIdx-this.activePage+this.activePage)+1;
            if (reCalc <= this.page.lastPage) {
                console.log("gonext호출");

            this.$emit('go-page', reCalc,this.perPage);
            }
        }
    }
}
</script>
<style></style>
    