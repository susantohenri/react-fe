import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice.js";

const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})

console.log('store created', store.getState())
store.subscribe(() => {
    console.log('store updated', store.getState())
})

export default store