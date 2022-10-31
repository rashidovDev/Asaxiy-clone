import {configureStore} from "@reduxjs/toolkit"
import cartSlice from "./Slices/cartSlice";
import favouriteSlice from "./Slices/favouriteSlice";
import  modalSlice  from "./Slices/ModalSlice";

const store = configureStore({
    reducer : {
        modalSlice : modalSlice,
        cartSlice : cartSlice,
        favouriteSlice : favouriteSlice
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch