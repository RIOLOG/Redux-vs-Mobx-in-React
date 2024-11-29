import React from "react";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div>
      <h1>MobX Multi-Store Example</h1>
      <Counter />
      <Todo />
      <Cart />
    </div>
  );
};

export default App;
