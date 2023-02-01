import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./items-Slice";
import userSlice from "./user-Slice";

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        item : itemsSlice.reducer
    }
})

export default store