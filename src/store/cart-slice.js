import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  cartItems: [],
  clearCart: false,
  openCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    handleClearCart: (state) => {
      // if(state.cartItems.length == 0 ){
      //   state.openCart = !state.openCart
      // }
      state.clearCart = false;
      state.cartItems.length = 0;
    },
    incrementItemQty:(state,action)=>{
      if(action.payload.qty >=5 ){
        toast.warn(`Item quantity is restricted to 5 per user` )
        return 
      }
      state.cartItems.map((i) => (i.id ==  action.payload.id) ? i.qty +=1 : i.qty  )
    },
    decrementItemQty:(state,action)=>{
      if(action.payload.qty <= 1 ){
        state.cartItems = state.cartItems.filter((i) => i.id !== action.payload.id )
        if(state.cartItems.length == 0){
          state.openCart = !state.openCart;
        }
        return  
      }
      state.cartItems.map((i) => (i.id ==  action.payload.id) ? i.qty -=1 : i.qty  )
    },
    handleOpenCartState: (state) => {
      
      state.openCart = !state.openCart;
      console.log("🚀 ~ file: cart-slice.js:40 ~ state.openCart", state.openCart)
    },
    addItemsToCart: (state, action) => {
      const doesItemExists = state.cartItems.find(
        (i) => i.id == action.payload.id
      );
      if (doesItemExists && action.payload.qty == 1) {
        toast.warn(`${action.payload.title} already exists in cart .. `);
      } else {
        state.cartItems.push(action.payload);
        toast.info(`${action.payload.title} added to cart .. `);
      }

      // Todo : u have to check if item is present in cart , if yes then increase quantity else add it in main list
      //todo : done with this , we wil handle add qty in cart slider
    },
  },
});
export const openCart = (state) => state.cart.openCart;
export const cartItems = (state) => state.cart.cartItems;
export const {
  handleClearCart,
  handleOpenCartState,
  addItemsToCart,
  incrementItemQty,
  decrementItemQty
} = cartSlice.actions;
export default cartSlice;
