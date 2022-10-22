import {createSlice} from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = [{
    question:'Do you love programming?',
    answer:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto earum esse harum iste labore neque obcaecati optio sapiente veniam voluptates?\n',
    status:false,
    id:uuidv4()
},{
    question:'Do you love programming1?',
    answer:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto earum esse harum iste labore neque obcaecati optio sapiente veniam voluptates?\n',
    status:false,
    id:uuidv4()
},{
    question:'Do you love programming2?',
    answer:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto earum esse harum iste labore neque obcaecati optio sapiente veniam voluptates?\n',
    status:false,
    id:uuidv4()
},{
    question:'Do you love programming3?',
    answer:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto earum esse harum iste labore neque obcaecati optio sapiente veniam voluptates?\n',
    status:false,
    id:uuidv4()
}]

const CounterSlicer = createSlice({
    name:'accordion',
    initialState,
    reducers:{
        Toggle:(state,action)=>{
            return state.map(i=>i.id==action.payload ?
                {id:i.id,question:i.question,answer:i.answer,status:true}:
                {id:i.id,question:i.question,answer:i.answer,status:false})
        },
        Add:(state,action)=>{
            const q = prompt('Write your question!')+'?';
            const a = prompt('Write your answer!');
            if(q!=''&&a!=''){
                state.push({id:uuidv4(),question:q,answer:a,status:false})
            }
        },
        Delete:(state,action)=>{
            return state.filter((el)=>{
                return el.id !== action.payload;
            })
        },
    }
})

export const {Toggle,Add,Delete} = CounterSlicer.actions;
export default CounterSlicer.reducer;