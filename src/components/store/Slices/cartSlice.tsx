 import { createSlice } from "@reduxjs/toolkit"
// import { IProduct as Props } from "../../../data";

// export interface CounterState {
//     items : Props["product"],
//     totalQuantity : number,
//     totalAmount : number
//   }

//   const initialState: CounterState = {
//     items: [],
//     totalQuantity: 0,
//     totalAmount: 0,
//   }

// const cartSlice  = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addItemToCart(state, action){
//             const newItem : Props["product"] = action.payload;
//             const existingItem = state.items.find((item) => item.id === newItem.id)
//             state.totalQuantity++
//             if(!existingItem){
//                       state.items.push({
//                         id: newItem.id,
//                         heading: newItem.heading,
//                         quantity: 1,
//                         totalPrice:newItem.price,
//                         monthPrice : newItem.monthPrice,
//                         image : newItem.image
//                       })
//             }else{
//                 existingItem.quantity++
//                 existingItem.totalPrice = existingItem.totalPrice + newItem.price
//             }
//             state.totalAmount = state.items.reduce(
//                 (total, item) => total + (item.price) * (item.quantity),0
//               );
//         },
//         removeItemFromCart(state, action){
//             const id = action.payload;
//             const existingItem = state.items.find((item) => item.id === id);
//             state.totalQuantity--;
//             state.quantity--;
//             state.changed = true
//             if (existingItem.quantity === 1){
//                 state.items = state.items.filter((item) => item.id !== id)
//             }else{
//                 existingItem.quantity--;
//                 existingItem.totalPrice = existingItem.totalPrice - existingItem.price
//             }
//             state.totalAmount = state.items.reduce(
//                 (total, item) => total + (item.price)*(item.quantity),0
//             );
//         },
//         deleteItem(state, action) {
//             const id = action.payload;
//             const existingItem = state.items.find((item) => item.id === id);
      
//             if (existingItem) {
//               state.items = state.items.filter((item) => item.id !== id);
//               state.totalQuantity = state.totalQuantity - existingItem.quantity;
//             }
      
//             state.totalAmount = state.items.reduce(
//               (total, item) => total + Number(item.price) * Number(item.quantity),
//               0
//             );
//           },
//     }
// })

// export const cartAction = cartSlice.actions;
// export default cartSlice;