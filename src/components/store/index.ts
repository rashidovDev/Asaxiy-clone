import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "./Slices/cartSlice";
import categorySlice from "./Slices/categorySlice";
import favouriteSlice from "./Slices/favouriteSlice";
import oneClickSlice from "./Slices/oneClickSlice";
import productSlice  from "./Slices/productSlice";

const store = configureStore({
    reducer : {
        category : categorySlice,
        product : productSlice,
        oneClick : oneClickSlice,
        cartSlice : cartSlice,
        favouriteSlice : favouriteSlice
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch