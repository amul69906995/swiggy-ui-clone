import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    items:[]
  }

  export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
     addItem:(state,action)=>{
       state.items.push(action.payload)
     },
     removeItem: (state, action) =>{
     },
     emptyCart:(state,action)=>{
        state.items.length=0
     }
    }

})

export const { addItem,removeItem,emptyCart } = cartSlice.actions

export default cartSlice.reducer;