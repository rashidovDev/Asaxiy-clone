import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface IProducts {
    product : {
        id : number,
        heading : string,
        image : any,
        price : number,
        quantity : number
    }[]
}

export interface CounterState {
    items : IProducts["product"],
    totalQuantity : number,
    totalAmount : number,
    changed? : boolean,
    quantity? : number
  }
   const initialState: CounterState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  }

const cartSlice  = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state : CounterState, action : PayloadAction<any>){
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id)
            state.totalQuantity++
            if(!existingItem){
                      state.items.push({...action.payload, quantity : 1})
            }else{
                existingItem.quantity++
                existingItem.price = existingItem.price + newItem.price
            }
            state.totalAmount = state.items.reduce(
              (total : number, item : any) => total + Number(item.price) * Number(item.quantity),
              0
            );
        },
        // removeItemFromCart(state : CounterState, action : PayloadAction<any>){
        //     const id = action.payload;
        //     const existingItem = state.items.find((item) => item.id === id);
        //     state.totalQuantity--;

        //     state.quantity--;
        //     state.changed = true
        //     if (existingItem === 1){
        //         state.items = state.items.filter((item : any) => item.id !== id)
        //     }else{
        //         existingItem?.quantity--;
        //         existingItem.price = existingItem.price - existingItem.price
        //     }
        //     state.totalAmount = state.items.reduce(
        //         (total : number, item : any) => total + (item.price)*(item.quantity),0
        //     );
        // },
        
        deleteItem(state : CounterState, action : PayloadAction<any> ) {
            const id = action.payload;
            const existingItem = state.items.find((item : any) => item.id === id);
      
            if (existingItem) {
              state.items = state.items.filter((item : any) => item.id !== id);
              state.totalQuantity = state.totalQuantity - existingItem.quantity;
            }
      
            state.totalAmount = state.items.reduce(
              (total : number, item : any) => total + Number(item.price) * Number(item.quantity),
              0
            );
          },
    }
})

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;