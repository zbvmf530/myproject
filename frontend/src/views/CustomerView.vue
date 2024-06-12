<template>
    <div>고객관리</div>
    <table class="table table-dark table-hover">
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>phone</th>
                <th>address</th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="cust in customers">
                <td v-text="cust.id"></td>
                <td v-text="cust.name"></td>
                <td v-text="cust.email"></td>
                <td v-text="cust.phone"></td>
                <td v-text="cust.address"></td>
            </tr>
        </tbody>
    </table>
</template>
<script>
const url='/api/customer';
import axios  from "axios";
export default {
data(){ return { customers:[] }; },
    created() {
        axios.get(url)
        .then(json=> this.customers = json.data);
    },
    methods:{}
    }
</script>
<style></style>