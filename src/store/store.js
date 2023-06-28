import { combineReducers, configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./items-Slice";
import userSlice from "./user-Slice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import cartSlice from "./cart-Slice";

const rootConfig = {
  key: "root",
  storage,
  blacklist : ['cart'] 
  
  //? don't know what actually happened but i wanted to white list only cart slice but ended up black listing cart
  //* https://github.com/rt2zz/redux-persist#nested-persists
};

const CartPersistConfig = {
  key: 'cart',
  storage,
  blacklist: ['openCart']
  //! so here only openCart is not being persisted
}

const rootReducer = combineReducers({
  user: userSlice.reducer,
  item: itemsSlice.reducer,
  cart: persistReducer(CartPersistConfig, cartSlice.reducer),
});

const persistedReducer = persistReducer(rootConfig, rootReducer);
 
const store = configureStore({
  reducer: persistedReducer,
});

export default store;
export const persistor = persistStore(store);
