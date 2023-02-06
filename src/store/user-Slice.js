import {createSlice} from '@reduxjs/toolkit'

const initialState={
    user:[]
}
const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setInitialUser:(state, action)=>{
            state.user.length =0
            state.user.push(action.payload)
        },
        removeUser(state){
            state.user.length = 0
        }
    }
})
export const  {setInitialUser , removeUser } = userSlice.actions
export const User = (state)=>  state.user

export default userSlice