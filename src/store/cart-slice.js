import { createSlice } from "@reduxjs/toolkit"


const initialState={
    cartItems : [],
    clearCart :false,

}

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers:{
        handleClearCart :(state)=>{
            state.clearCart = false
            state.cartItems.length =0
        }
    }
})