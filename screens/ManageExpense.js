import { Text } from "react-native";
import { useLayoutEffect } from "react";

function ManageExpense({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation.isEditing]);

  return <Text>Manage Expense Screen</Text>;
}

export default ManageExpense;
