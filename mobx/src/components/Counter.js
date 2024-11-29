import React from "react";
import { observer } from "mobx-react-lite";
import { counterStore } from "../stores/CounterStore";

const Counter = observer(() => {
  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {counterStore.count}</p>
      <button onClick={() => counterStore.increment()}>Increment</button>
      <button onClick={() => counterStore.decrement()}>Decrement</button>
    </div>
  );
});

export default Counter;
