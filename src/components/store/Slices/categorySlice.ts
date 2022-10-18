import { createSlice } from "@reduxjs/toolkit"

export interface CounterState {
    categoryIsVisible : boolean
  }

  const initialState: CounterState = {
    categoryIsVisible : false
  }

export const categorySlice = createSlice({
    name : "category",
    initialState,
    reducers :{
        toggle(state) {
            state.categoryIsVisible = !state.categoryIsVisible
        }
    }
})

export const categoryAction = categorySlice.actions;
export default categorySlice.reducer;