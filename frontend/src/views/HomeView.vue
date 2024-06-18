<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <PageTitle title="컴포넌트 사용 예제" menuNo="10"></PageTitle> -->
     <PageTitle></PageTitle>
    <MenuBar :menu="['신발','상의','하의']"></MenuBar>
    <HelloWorld :user="users"/>
    <hr>
    <ChildComponent ref="child_component"></ChildComponent>
    <hr>
    <!-- <ChildComponent4 @send-message="sendMessage"></ChildComponent4> -->
    <SlotModalLayout>
      <template v-slot:header>팝업 헤더</template>
      <template v-slot:default>팝업 컴포넌트</template>
      <template v-slot:footer><button class="btn btn-danger">닫기</button></template>
    </SlotModalLayout>
    <ProvideInjectChild></ProvideInjectChild>
    <hr>
    <p v-text="'count : '+count"></p>
    <!-- <button @click="increment">증가</button> -->
    <!-- <button @click="decrement">감소</button> -->
    <!-- <FooterTitle>카피라이트</FooterTitle> -->
     <button class="btn btn-primary" @click="payments">카카오페이</button>
  </div>
</template>

<script>

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PortOne from '@portone/browser-sdk/v2';

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
 import PageTitle from '@/components/PageTitle.vue'
import MenuBar from '@/components/MenuBar.vue'
import ChildComponent from '@/components/ChildComponent.vue'
// import ChildComponent4 from '@/components/ChildComponent4.vue'
import SlotModalLayout from '@/components/SlotModalLayout.vue'
import ProvideInjectChild from '@/components/ProvideInjectChild.vue'
import Paging from '@/components/PagingComponent.vue'


export default {
  
  name: 'HomeView',
  components: {
    Paging, HelloWorld, 
    MenuBar,ChildComponent,
    SlotModalLayout,ProvideInjectChild
  },
  data(){ return { users : { username:'Choi',msg:'hi' }, items:['A','B'], page:{}}; },
  methods:{
    sendMessage(msg){
      //console.log(msg);
    },
    // increment(){
    //   this.$store.commit('increment');
    // },
    // decrement(){
    //   this.$store.commit('decrement');
    // }
  },
  created(){
    
  },
  computed:{
    // count(){
    //   return this.$store.state.count;
    // }
  },
  mounted(){
    

    // 자식 컴포넌트 이벤트 발생
    // this.$refs.child_component.$refs.btn.click();
    // this.$refs.child_component.$refs.username.focus();
    
    // 자식컴포넌트 함수 직접 호출
    //this.$refs.child_component.childFunc();
  },
  provide(){
    return {
      itemLength:this.items.length
    }
  },
  methods:{
    async payments(){
      const response = await PortOne.requestPayment({
  // Store ID 설정
  storeId: "store-48e0d738-fd6d-4a46-bfb7-aedffef0b647",
  // 채널 키 설정
  channelKey: "channel-key-ee0cacc5-2d48-4eaa-9dd9-8b4dfecfc881",
  paymentId: `payment-${crypto.randomUUID()}`,
  orderName: "나이키 와플 트레이너 2 SD",
  totalAmount: 1000,
  currency: "CURRENCY_KRW",
  payMethod: "EASY_PAY",
});
    }
  }
}
</script>
