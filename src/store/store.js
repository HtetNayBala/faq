import {configureStore} from "@reduxjs/toolkit";
import slicer from "../slicer/slicer";
import inputSlicer from "../slicer/inputSlicer";

const store = configureStore({
    reducer:{
        list : slicer,
        inputData : inputSlicer,
    }
});

export  default  store;