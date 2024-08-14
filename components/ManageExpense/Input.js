import { TextInput, View, Text, StyleSheet, TextComponent } from "react-native";
import { GlobalStyles } from "../../constants/styles";
function Input({ label, style, textInputConfig }) {
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.Colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.Colors.primary100,
    color: GlobalStyles.Colors.primary700,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },

  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
