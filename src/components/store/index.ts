import {configureStore} from "@reduxjs/toolkit"
import categorySlice from "./Slices/categorySlice";
import oneClickSlice from "./Slices/oneClickSlice";
import productSlice  from "./Slices/productSlice";

const store = configureStore({
    reducer : {
        category : categorySlice,
        product : productSlice,
        oneClick : oneClickSlice
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch