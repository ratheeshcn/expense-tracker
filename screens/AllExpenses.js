import { Text } from "react-native";
import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpenseContext } from "../store/expenses-context";

function AllExpenses() {
  const expensesContext = useContext(ExpenseContext);

  return (
    <ExpensesOutput
      expenses={expensesContext.expenses}
      expensesPeriod={"Total"}
    />
  );
}
export default AllExpenses;
