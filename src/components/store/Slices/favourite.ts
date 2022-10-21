import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFavourite {
    favourites : any,
    totalFavourite : number,
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
            const existingItem = state.favourites.find((item : any) => item.id === newItem.id)
            if(!existingItem){
                state.totalFavourite++
                state.favourites.push(  
                {
                  id : newItem.id,
                  heading: newItem.heading,
                  price:newItem.price,
                  image : newItem.image
                })
          }
            else if(state.totalFavourite >= 1){
                state.totalFavourite--
            }
            else if(state.totalFavourite === 0){
                state.totalFavourite++
            }
        }
    }
})

export const favouriteAction = favouriteSlice.actions;
export default favouriteSlice.reducer;