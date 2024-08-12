import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

import { GlobalStyles } from "../../constants/styles";

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

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.Colors.primary700,
  },
});
