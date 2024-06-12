<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <PageTitle title="컴포넌트 사용 예제" menuNo="10"></PageTitle>
    <MenuBar :menu="['신발','상의','하의']"></MenuBar>
    <HelloWorld :user="users"/>
    <hr>
    <ChildComponent ref="child_component"></ChildComponent>
    <hr>
    <FooterTitle>카피라이트</FooterTitle>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import PageTitle from '@/components/PageTitle.vue'
import MenuBar from '@/components/MenuBar.vue'
import ChildComponent from '@/components/ChildComponent.vue'
export default {
  name: 'HomeView',
  components: {
    HelloWorld, PageTitle,MenuBar,ChildComponent
  },
  data(){ return { users : { username:'Choi',msg:'hi' }}; },
  mounted(){
    // 자식 컴포넌트 이벤트 발생
    // this.$refs.child_component.$refs.btn.click();
    // this.$refs.child_component.$refs.username.focus();
    
    // 자식컴포넌트 함수 직접 호출
    this.$refs.child_component.childFunc();
  }
}
</script>
