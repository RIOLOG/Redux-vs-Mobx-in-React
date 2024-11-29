import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "../features/cartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const sampleItem = { id: 1, name: "Sample Product", price: 100 };

  return (
    <div>
      <h2>Cart</h2>
      <button onClick={() => dispatch(addItem(sampleItem))}>Add Item</button>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
      <p>Total Items: {items.length}</p>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
            <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
