import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
    productItemIsVisible : boolean
}

const initialState : CounterState = {
    productItemIsVisible : false
}

export const productSlice = createSlice({
    name : "product",
    initialState,
    reducers : {
        toggle(state){
            state.productItemIsVisible = !state.productItemIsVisible
        }
    }
})

export const productAction = productSlice.actions;
export default productSlice.reducer;


