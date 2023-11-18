import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Dimensions, SafeAreaView, StyleSheet } from "react-native";

import { GreenButton, GreyButton } from "../../components/Button";
import PasswordInputWithIcon from "../../components/PasswordInputWithIcon";
import { BoldText, RegularText } from "../../components/Texts";
import { View } from "../../components/Themed";
import LockIcon from "../../components/icons/LockIcon";
import { globalStyle } from "../../styles/globalStyle";
import InputValidator from "../../utils/InputValidator";

export default function AccountRecovery() {
  const [passwdInput, setPasswdInput] = useState("");
  const [confirmPasswdInput, setConfirmPasswdasswdInput] = useState("");
  const [passwdIsValid, setPasswdIsValid] = useState(false);
  const [confirmPasswdIsValid, setConfirmPasswdIsValid] = useState(false);

  const [passwdIsDisplayed, setPasswdIsDisplayed] = useState(false);
  const [bothPasswdMatch, setBothPasswdMatch] = useState(false);

  useEffect(() => {
    InputValidator.changePassword(passwdInput, setPasswdIsValid);
    InputValidator.changePassword(confirmPasswdInput, setConfirmPasswdIsValid);

    if (passwdInput === confirmPasswdInput) {
      setBothPasswdMatch(true);
    } else {
      setBothPasswdMatch(false);
    }
  }, [passwdInput, confirmPasswdInput]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <BoldText style={styles.bigText}>Change password</BoldText>
        <RegularText style={{ ...styles.smallSpacingTop, ...styles.smallText }}>
          Enter a new password, not less than 8 characters and not your previous
          password
        </RegularText>

        <View style={styles.passwordWrapper}>
          <PasswordInputWithIcon
            icon={() => <LockIcon />}
            placeholder="Enter password"
            onChangeText={(value) => setPasswdInput(value)}
            value={passwdInput}
            passwdIsDisplayed={passwdIsDisplayed}
            eyeVisibleOnPress={() => setPasswdIsDisplayed(false)}
            eyeInvisibleOnPress={() => setPasswdIsDisplayed(true)}
          />
        </View>

        <View style={styles.confirmPasswordWrapper}>
          <PasswordInputWithIcon
            icon={() => <LockIcon />}
            placeholder="Re-enter password"
            onChangeText={(value) => setConfirmPasswdasswdInput(value)}
            value={confirmPasswdInput}
            passwdIsDisplayed={passwdIsDisplayed}
            eyeVisibleOnPress={() => setPasswdIsDisplayed(false)}
            eyeInvisibleOnPress={() => setPasswdIsDisplayed(true)}
          />
        </View>
      </View>

      <View style={{ marginVertical: 20 }}>
        {passwdIsValid && confirmPasswdIsValid && bothPasswdMatch ? (
          <GreenButton
            onPress={() => {
              router.push("/create/verify");
            }}
          >
            Change password
          </GreenButton>
        ) : (
          <View>
            <GreyButton>Change password</GreyButton>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const viewPortHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  passwordWrapper: { position: "relative", marginTop: 0 },
  confirmPasswordWrapper: { position: "relative", marginTop: -23 },

  ...globalStyle(viewPortHeight)
});
