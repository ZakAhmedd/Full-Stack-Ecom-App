import React from "react"
import { create } from 'zustand'

const useCartStore = create((set, get) => ({
  cartItems: [],

  // Add an item
  addItem: (item) => {
    const existingItem = get().cartItems.find(
      i => i._id === item._id && i.size === item.size
    );

    if (existingItem) {
      set({
        cartItems: get().cartItems.map(i =>
          i._id === item._id && i.size === item.size
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      });
    } else {
      set({ cartItems: [...get().cartItems, { ...item, quantity: 1 }] });
    }
  },

  // Remove an item
  removeItem: (id, size) => {
    set({ cartItems: get().cartItems.filter(item => !(item._id === id && item.size === size)) })
  },

  // Update quantity
  updateQuantity: (id, size, quantity) => {
    set({
      cartItems: get().cartItems.map(item =>
        item._id === id && item.size === size
          ? { ...item, quantity }
          : item
      )
    });
  },

  // Get total
  getTotal: () => get().cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
}))

export default useCartStore
