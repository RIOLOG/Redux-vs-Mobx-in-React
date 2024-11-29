import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../src/features/counterSlice'
import todoReducer from '../src/features/todoSlice';
import cartReducer from '../src/features/cartSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todoReducer,
        cart: cartReducer
    },
});


export default store