import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IProduct {
    product : {
        id : number,
        heading : string,
        image : any,
        price : number,
        quantity : number
    }[]
}

interface IProduct {
      id : number,
      heading : string,
      image : any,
      price : number,
      quantity : number
}

export interface CounterState {
    items : IProduct["product"],
    totalQuantity : number,
    totalAmount : number,
    changed? : boolean,
    quantity : number
  }

  const initialState: CounterState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
    quantity : 0
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
                      state.items.push(  
                      {
                        id : newItem.id,
                        heading: newItem.heading,
                        quantity: 1,
                        price:newItem.price,
                        image : newItem.image
                      })
            }else{
                existingItem.quantity++
                existingItem.price = existingItem.price + newItem.price
            }
            state.totalAmount = state.items.reduce(
              (total:number, item:any) => total + (item.price) * (item.quantity),0
              );
        },
        
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