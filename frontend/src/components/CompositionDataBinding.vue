<template>
    <!-- {{ count }}
    <button @click="count+=1">증가</button> -->

    <div>
        <h2>Calculator</h2>
        <div>
            <input type="text" v-model="num1" >
            <span> + </span>
            <input type="text" v-model="num2" >
            <span> = </span>
            <span> {{result}} </span>
        </div>
    </div>
    <h2>마우스 위치: {{ x }}, {{ y }}</h2>
</template>

<script setup>
import { plusCalc } from '@/common';
import { useMouse } from '@/mouse.js'

const { x, y } = useMouse()


let {num1,num2,result} = plusCalc();
</script>