import React from "react";
import { observer } from "mobx-react-lite";
import { cartStore } from "../stores/CartStore";

const Cart = observer(() => {
  const sampleItem = { id: 1, name: "Sample Product", price: 100 };

  return (
    <div>
      <h2>Cart</h2>
      <button onClick={() => cartStore.addItem(sampleItem)}>Add Item</button>
      <button onClick={() => cartStore.clearCart()}>Clear Cart</button>
      <p>Total Items: {cartStore.totalItems}</p>
      <ul>
        {cartStore.items.map((item) => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
            <button onClick={() => cartStore.removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Cart;
