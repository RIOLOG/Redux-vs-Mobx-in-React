import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../features/counterSlice';


const Counter = () => {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <>
            <h2>Counter App</h2>
            <p>Count is : {count}</p>
            <button onClick={() => dispatch(increment())}>Increment [+]</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </>
    )
}


export default Counter;