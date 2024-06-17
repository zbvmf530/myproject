import {computed, reactive, toRefs} from 'vue';
function plusCalc(){
    let state = reactive( { 
                num1:10, 
                num2:20, 
                result: computed(()=>parseInt(state.num1)+parseInt(state.num2)) } );
    return toRefs(state);
}

export {plusCalc}