import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Pair of shoes",
    amount: 44.99,
    date: new Date("2024-05-04"),
  },
  {
    id: "e2",
    description: "iPhone 15",
    amount: 944.99,
    date: new Date("2024-08-08"),
  },
  {
    id: "e3",
    description: "Toy car",
    amount: 36.59,
    date: new Date("2024-07-06"),
  },
  {
    id: "e4",
    description: "Sandals Tommy Hilfiger",
    amount: 244.04,
    date: new Date("2024-06-08"),
  },
  {
    id: "e5",
    description: "Running shoes Nike",
    amount: 120.44,
    date: new Date("2024-08-02"),
  },
  {
    id: "e6",
    description: "Pair of shoes",
    amount: 44.99,
    date: new Date("2024-05-04"),
  },
  {
    id: "e7",
    description: "iPhone 15",
    amount: 944.99,
    date: new Date("2024-08-08"),
  },
  {
    id: "e8",
    description: "Toy car",
    amount: 36.59,
    date: new Date("2024-07-06"),
  },
  {
    id: "e9",
    description: "Sandals Tommy Hilfiger",
    amount: 244.04,
    date: new Date("2024-06-08"),
  },
  {
    id: "e10",
    description: "Running shoes Nike",
    amount: 120.44,
    date: new Date("2024-08-02"),
  },
];

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({ desciption, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { desciption, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date.toString() + Math.random().toString();
      return [{ ...action.payload }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );

      const updatabaleExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatabaleExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;

    case "DELETE":
      return state.filter(() => expense.id !== action.payload.id);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpene: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
}

export default ExpensesContextProvider;
