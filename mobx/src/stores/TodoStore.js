import { makeAutoObservable } from "mobx";

class TodoStore {
    todos = [];

    constructor() {
        makeAutoObservable(this);
    }

    addTodo(task){
        this.todos.push({id:Date.now(), task, completed:false});
    }

    removeTodo(id) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
    }

    toggleTodo(id) {
        const todo = this.todos.find((todo) => todo.id === id);
        if (todo) {
            todo.completed = !todo.completed;
        }
    }
}


export const todoStore = new TodoStore();