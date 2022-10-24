import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {IProducts} from "./cartSlice"


 interface IFavourite {
    favourites : IProducts["product"],
    totalFavourite : number,
    quantity? : number
}

const initialState : IFavourite = {
    favourites : [],
    totalFavourite : 0,
}

const favouriteSlice = createSlice({
    name : "favourite",
    initialState, 
    reducers: {
        addItemToFavourite(state : IFavourite, action : PayloadAction<any>){
            const newItem = action.payload;
            const existingItem = state.favourites.find((item) => item.id === newItem.id)
            if(!existingItem){
                state.totalFavourite++
                state.favourites.push(  
                {
                  id : newItem.id,
                  heading: newItem.heading,
                  quantity: 1,
                  price:newItem.price,
                  image : newItem.image
                })
          }else if(existingItem){
             if(existingItem.quantity >= 1){
                existingItem.quantity--
                state.totalFavourite--
             }else{
                existingItem.quantity++
                state.totalFavourite++
             }
          }
        },
        deleteItem(state : IFavourite, action : PayloadAction<any> ) {
            const id = action.payload;
            const existingItem = state.favourites.find((item : any) => item.id === id);
      
            if (existingItem) {
              state.favourites = state.favourites.filter((item : any) => item.id !== id);
              state.totalFavourite = state.totalFavourite - existingItem.quantity;
            }
        },
    }
})

export const favouriteAction = favouriteSlice.actions;
export default favouriteSlice.reducer;


// reducers: {
//     addItemToCart(state : CounterState, action : PayloadAction<any>){
//         const newItem = action.payload;
//         const existingItem = state.items.find((item) => item.id === newItem.id)
//         state.totalQuantity++
//         if(!existingItem){
//                   state.items.push({...action.payload, quantity : 1})
//         }else{
//             existingItem.quantity++
//             existingItem.price = existingItem.price + newItem.price
//         }
//         state.totalAmount = state.items.reduce(
//           (total:number, item:any) => total + (item.price) * (item.quantity),0
//           );
//     },
    
//     deleteItem(state : CounterState, action : PayloadAction<any> ) {
//         const id = action.payload;
//         const existingItem = state.items.find((item : any) => item.id === id);
  
//         if (existingItem) {
//           state.items = state.items.filter((item : any) => item.id !== id);
//           state.totalQuantity = state.totalQuantity - existingItem.quantity;
//         }
  
//         state.totalAmount = state.items.reduce(
//           (total : number, item : any) => total + Number(item.price) * Number(item.quantity),
//           0
//         );
//       },
// }
// })
