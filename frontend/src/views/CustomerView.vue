<template>
    <div>고객관리</div>
    
    <div class="row">
        <div class="col-md-12 col-lg-6 border p-3">
            <select v-model="perPage" @change="changeUnitCount()">
        <option v-for="perPage in perPageList" :key="perPage.id" :value="perPage.value">{{ perPage.value }}</option>
    </select>

    
    <table class="table table-dark table-hover">
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>phone</th>
                <th>address</th>
                <th>delete</th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="(cust, idx) in customerList" @click="getCustomer(cust)">
                <td v-text="cust.id"></td>
                <td v-text="cust.name"></td>
                <td v-text="cust.email"></td>
                <td v-text="cust.phone"></td>
                <td v-text="cust.address"></td>
                <td><button class="btn btn-danger" @click.stop="deleteCustomer(cust)">삭제</button></td>
            </tr>
        </tbody>
    </table>
    <Paging :page :perPage @go-page="goPage"></Paging>
        </div>
    <div class="col-md-12 col-lg-6 border  p-3">
        <CustomerInsert :page :perPage :customer="this.customer"></CustomerInsert>
    </div>
    </div>


    
    
</template>

<script>
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Paging from '@/components/PagingComponent.vue';
import PageMixin from '../mixin.js';
import CustomerInsert from '@/views/CustomerInsertView.vue'
const url='/api/customer';
import axios  from "axios";
export default {
    mixins:[PageMixin],
    components:{Paging,CustomerInsert},
    data(){ return { 
            customerList:[],
            customerCount:'', 
            page:{},
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
                        ],
            perPage: 2,
            customer:{}
        }; 
    },
    created() {
        this.goPage(1,this.perPage);
    },
    watch: {
    perPage() {
      //console.log(this.perPage) // 5, 10, 15 가 콘솔에 찍힌다.
    }
  },
    methods:{
        async goPage(page,pUnit){
            console.log("페이지 유닛 : "+pUnit);
            if(pUnit == null)pUnit=this.perPage;
            let pageUnit = pUnit;
            let result = await axios.get('/api/customer?pageUnit='+`${pageUnit}&page=${page}`);
            this.customerList = result.data.customerList;
            this.customerCount = result.data.count;
            this.page = this.pageCalc(page,this.customerCount,5,pageUnit);

        },
        changeUnitCount(){
            //console.log(event.target.value);
            this.goPage(1,this.perPage);
        },
        getCustomer(cust){
            this.customer = {...cust};
            console.log(this.customer);
        },
        async deleteCustomer(cust){
            let isDeleted = await axios.delete(`/api/customer/${cust.id}`);
            if(isDeleted.statusText == 'OK'){
                alert('삭제완료!');
                this.goPage(1,this.perPage);
            }
        }
    }
}
</script>
<style></style>