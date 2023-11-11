import { ReactNode, useState } from "react";
import { StyleSheet, TextInput } from "react-native";

import { View } from "./Themed";
import EyeInvisibleIcon from "./icons/EyeInvisible";
import EyeVisibleIcon from "./icons/EyeVisible";

const PasswordInputWithIcon = ({
  value,
  onChangeText,
  icon,
  placeholder
}: {
  value?: string;
  onChangeText?: (value: string) => void;
  icon: (props?: object) => ReactNode;
  secureText?: boolean;
  placeholder?: string;
}) => {
  const [passwdIsDisplayed, setPasswdIsDisplayed] = useState(false);

  return (
    <View>
      <View style={styles.emailInputWrapper}>
        <TextInput
          style={styles.emailInput}
          placeholder={placeholder}
          keyboardType="default"
          secureTextEntry={!passwdIsDisplayed}
          value={value}
          onChangeText={onChangeText}
        />
        <View style={styles.emailIcon}>{icon()}</View>
      </View>
      <View
        style={{
          position: "absolute",
          top: 25,
          right: 12,
          backgroundColor: "transparent"
        }}
      >
        {passwdIsDisplayed ? (
          <EyeVisibleIcon
            onPress={() => setPasswdIsDisplayed(!passwdIsDisplayed)}
          />
        ) : (
          <EyeInvisibleIcon
            onPress={() => setPasswdIsDisplayed(!passwdIsDisplayed)}
          />
        )}
      </View>
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

export default PasswordInputWithIcon;
