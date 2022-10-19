import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
    oneClickIsVisible : boolean
}

const initialState : CounterState = {
    oneClickIsVisible : false
}

export const oneClickSlice = createSlice({
    name : "oneCLick",
    initialState,
    reducers : {
        toggle(state) {
            state.oneClickIsVisible = !state.oneClickIsVisible
        }
    }
})

export const oneClickAction = oneClickSlice.actions;
export default oneClickSlice.reducer;