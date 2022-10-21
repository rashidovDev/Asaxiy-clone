import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "./Slices/cartSlice";
import categorySlice from "./Slices/categorySlice";
import favourite from "./Slices/favourite";
import oneClickSlice from "./Slices/oneClickSlice";
import productSlice  from "./Slices/productSlice";

const store = configureStore({
    reducer : {
        category : categorySlice,
        product : productSlice,
        oneClick : oneClickSlice,
        cartSlice : cartSlice,
        favourite : favourite
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch