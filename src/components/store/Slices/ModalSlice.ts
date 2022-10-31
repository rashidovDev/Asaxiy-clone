import { createSlice } from "@reduxjs/toolkit"

export interface CounterState {
    sidebarIsVisible : boolean,
    categoryIsVisible : boolean,
    oneClickIsVisible : boolean,
    productItemIsVisible : boolean
  }

  const initialState: CounterState = {
    sidebarIsVisible : false,
    categoryIsVisible : false,
    oneClickIsVisible : false,
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
            state.oneClickIsVisible = !state.oneClickIsVisible
        },
        toggleProduct(state){
            state.productItemIsVisible = !state.productItemIsVisible
        }
    }
})

export const modalAction = modalSlice.actions;
export default modalSlice.reducer;