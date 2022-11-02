import { createSlice } from "@reduxjs/toolkit"

export interface CounterState {
    sidebarIsVisible : boolean,
    categoryIsVisible : boolean,
    accountIsVisible : boolean,
    productItemIsVisible : boolean
  }

  const initialState: CounterState = {
    sidebarIsVisible : false,
    categoryIsVisible : false,
    accountIsVisible : false,
    productItemIsVisible : false
  }

export const modalSlice = createSlice({
    name : "modal",
    initialState,
    reducers :{
        toggleSidebar(state) {
            state.sidebarIsVisible = !state.sidebarIsVisible
        },
        toggleCategory(state) {
            state.categoryIsVisible = !state.categoryIsVisible
        },
        toggleOneClick(state) {
            state.accountIsVisible = !state.accountIsVisible
        },
        toggleProduct(state){
            state.productItemIsVisible = !state.productItemIsVisible
        },
    }
})

export const modalAction = modalSlice.actions;
export default modalSlice.reducer;