import { makeAutoObservable } from "mobx";

class CartStore {
  items = [];

  constructor() {
    makeAutoObservable(this);
  }

  addItem(item) {
    const existingItem = this.items.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.items.push({ ...item, quantity: 1 });
    }
  }

  removeItem(id) {
    this.items = this.items.filter((item) => item.id !== id);
  }

  clearCart() {
    this.items = [];
  }

  get totalItems() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }
}

export const cartStore = new CartStore();
