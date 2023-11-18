import { ReactNode } from "react";
import { StyleSheet, TextInput } from "react-native";

import { View } from "./Themed";

const InputWithIcon = ({
  value,
  onChangeText,
  icon,
  secureText,
  placeholder
}: {
  value?: string;
  onChangeText?: (value: string) => void;
  icon: (props?: object) => ReactNode;
  secureText?: boolean;
  placeholder?: string;
}) => {
  return (
    <View style={styles.emailInputWrapper}>
      <TextInput
        style={styles.emailInput}
        placeholder="Enter email address"
        keyboardType="email-address"
        value={value}
        onChangeText={onChangeText}
      />
      <View style={styles.emailIcon}>{icon()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  emailInputWrapper: {
    position: "relative"
  },
  emailInput: {
    borderColor: "#d1d3d9",
    fontFamily: "SatoshiRegular",
    borderWidth: 1,
    marginVertical: 24,
    paddingVertical: 15,
    paddingLeft: 55,
    paddingRight: 40,
    borderRadius: 30,
    fontSize: 17
  },
  emailIcon: { position: "absolute", top: 43, left: 22 }
});

export default InputWithIcon;
