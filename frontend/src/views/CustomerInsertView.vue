<template>
    <h1>고객등록</h1>
    <div class="container">
        <div class="input-group mb-3">
            <label class="form-label">name</label>
            <input class="form-control" v-model="Customerdata.name">
        </div>
        
        <div class="input-group mb-3">
            <label class="form-label">email</label>
            <input class="form-control" v-model="Customerdata.email">
        </div>
        
        <div class="input-group mb-3">
            <label class="form-label">phone</label>
            <input class="form-control" v-model="Customerdata.phone">
        </div>

        <div class="input-group mb-3">
            <label class="form-label">address</label>
            <input class="form-control" v-model="Customerdata.address">
        </div>
        <button v-if="!checkCustomer" @click="updateCustomer" class = "btn btn-primary">수정</button>
        <button v-if="checkCustomer" @click="addCustomer" class = "btn btn-primary">등록</button>
    </div>
</template>
<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
const url='/api/customer';
import axios  from "axios";
export default {
    props:{
        customer : {
            type: Object
        },
        page:{type:Object},
        perPage:{type:Number}
    },
    data(){ return { Customerdata : {...this.customer} }; },
    created() {console.log(this.Customerdata)},
    computed:{
        checkCustomer(){
            console.log(this.Customerdata.id == null);
            return this.Customerdata.id == null?true:false;
        }
    },
    watch:{
        customer(newQuestion,oldQuestion){
            this.Customerdata = {...newQuestion};
            console.log(this.Customerdata);
        }
    },
    methods:{
        async addCustomer(){
            //console.log(this.Customerdata);
            let result = await axios.post(url,this.Customerdata)
            .then(res=>res);
            if(result.statusText == 'OK')
            {
                alert("등록완료!");
                this.Customerdata = {};
                this.$parent.goPage(1,this.perPage);
            }
        },
        async updateCustomer(){
            let customerId = this.Customerdata.id;
            delete this.Customerdata.id;
            
            //console.log(updatableCustomer);
            let result = await axios.put(url+`/${customerId}`,this.Customerdata)
            .then(res=>res);
            if(result.statusText == 'OK')
            {
                alert("수정완료!");
                this.Customerdata = {};
                this.$parent.goPage(this.page.currentPage,this.perPage);
            }
        } 
    }
    }
</script>
<style></style>
    