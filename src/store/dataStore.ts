import { create } from "zustand";
import { persist } from "zustand/middleware";
import { type Expense } from "../types/datatypes";

interface ItemState {
  expenses: Expense[];
  addExpense: (
    title: string,
    amount: number,
    category: Expense["category"],
  ) => void;

  deleteExpense: (id: string) => void;
}

export const useItemStore = create<ItemState>()(
  persist(
    (set) => ({
      // Default initial items used only if localStorage is completely empty
      expenses: [],
      addExpense: (title, amount, category) =>
        set((state) => ({
          expenses: [
            {
              id: Date.now().toString(),
              title,
              amount,
              category,
              date: new Date().toISOString().split("T")[0],
            },
            ...state.expenses,
          ],
        })),
      deleteExpense: (id) =>
        set((state) => ({
          expenses: state.expenses.filter((expense) => expense.id !== id),
        }))
    }),
    {
      // Unique key name for the localStorage entry
      name: "exp-680610674",
    },
  ),
);
