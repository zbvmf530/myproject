<template>
    <h1>고객등록</h1>
    <div class="container">
        <div class="input-group mb-3">
            <label class="form-label">name</label>
            <input class="form-control"v-model="data.name">
        </div>
        
        <div class="input-group mb-3">
            <label class="form-label">email</label>
            <input class="form-control" v-model="data.email">
        </div>
        
        <div class="input-group mb-3">
            <label class="form-label">phone</label>
            <input class="form-control"v-model="data.phone">
        </div>

        <div class="input-group mb-3">
            <label class="form-label">address</label>
            <input class="form-control"v-model="data.address">
        </div>
        
        <button @click="addCustomer" class = "btn btn-primary">등록</button>
    </div>
</template>
<script>
const url='/api/customer';
import axios  from "axios";
export default {
    data(){ return { data : {name:'', email:'', phone:'', address:''} }; },
    created() {},
    methods:{
        async addCustomer(){
            let result = await axios.post(url,this.data)
            .then(res=>res);
            if(result.statusText == 'OK')
            {
                alert("등록완료!");
                this.$router.push('/customer');
            }
        }
    }
    }
</script>
<style></style>
    