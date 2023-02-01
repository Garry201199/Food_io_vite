import {createSlice} from '@reduxjs/toolkit'
const initialState={
    value:[],
    openCart: false
}
const itemsSlice = createSlice({
    name:'items',
    initialState,
    reducers:{
        setAllItems :(state , action )=>{
            state.value = (action.payload) 
        },
        handleOpenCartState:(state)=>{
            state.openCart = !state.openCart
        }
 
    }
})
export const {setAllItems ,handleOpenCartState  } = itemsSlice.actions;

export const Items = (state) => state.item.value ;
export const openCart  = (state) =>  state.item.openCart
export default itemsSlice