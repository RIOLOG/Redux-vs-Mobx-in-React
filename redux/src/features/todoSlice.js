import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"todos",
    initialState: [],

    reducers: {

        addTodo: (state, action) => {
            state.push({id: Date.now(), task: action.payload, completed: false});
        },

        removeTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload);
        },

        toggleTodo: (state, action) => {
            const todo = state.find((tempTodo) => tempTodo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
    },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;