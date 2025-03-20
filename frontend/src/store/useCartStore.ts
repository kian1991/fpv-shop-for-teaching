// ZUSTAND 101

import { create } from "zustand";
import { Product } from "../types";
import { persist } from "zustand/middleware";

// Helper

// calculate new totalAmount
function calculateAmount(items: CartItem[]): number {
  return items.reduce(
    (prev, current) => prev + Number(current.product.price),
    0,
  );
}

// STEP 1: type declaration
type CartItem = {
  product: Product;
  amount: number;
};

type CartStore = {
  items: CartItem[];
  totalAmount: number;
  addItem: (product: Product) => void;
  setItemAmount: (id: number, amount: number) => void;
};

// STEP 2: implement zustand
export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      totalAmount: 0,
      addItem: (product) =>
        set((state) => {
          const newItems: CartItem[] = structuredClone(state.items);
          // check if al
          const index = newItems.findIndex(
            (item) => item.product.id === product.id,
          );
          if (index > -1) {
            // item found so set the corresponding item at index
            newItems[index].amount += 1;
          } else {
            newItems.push({ product, amount: 1 });
          }

          return {
            items: newItems,
            totalAmount: calculateAmount(newItems),
          };
        }),
      setItemAmount(id, amount) {
        // Case 1: when amount goes 0 -> delete
        // Case 2: change amount
        // Case 3: product not found -> THROW BAD ASS ERROR
        set((state) => {
          const newItems: CartItem[] = structuredClone(state.items);
          const index = newItems.findIndex((item) => item.product.id === id);
          if (index === -1)
            throw new Error(`Product with id ${id} not in cart.`);
          if (amount === 0) newItems.splice(index, 1);
          else {
            newItems[index].amount = amount;
          }
          return {
            items: newItems,
            totalAmount: calculateAmount(newItems),
          };
        });
      },
    }),
    { name: "cart-store" },
  ),
);
