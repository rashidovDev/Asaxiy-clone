import {configureStore} from "@reduxjs/toolkit"
import categorySlice from "./Slices/categorySlice";


const store = configureStore({
    reducer : {category : categorySlice}
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch