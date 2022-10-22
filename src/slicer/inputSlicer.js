import {createSlice} from "@reduxjs/toolkit";

const initialState = {};

const InputSlice = createSlice({
    name:'input',
    initialState,
    reducers:{
        ChangeInput : (state,action) => {
            console.log({question: action.payload.q ,answer : action.payload.a})
        }

    }
});

export const {ChangeInput} = InputSlice.actions;
export default InputSlice.reducer;

