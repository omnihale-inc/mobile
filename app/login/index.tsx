import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Dimensions, Pressable, SafeAreaView, StyleSheet } from "react-native";

import { GreenButton, GreyButton } from "../../components/Button";
import InputWithIcon from "../../components/InputWithIcon";
import PasswordInputWithIcon from "../../components/PasswordInputWithIcon";
import { BoldText, MediumText, RegularText } from "../../components/Texts";
import { View } from "../../components/Themed";
import LockIcon from "../../components/icons/LockIcon";
import MailIcon from "../../components/icons/MailIcon";
import { globalStyle } from "../../styles/globalStyle";
import InputValidator from "../../utils/InputValidator";

export default function Login() {
  const [emailInput, setEmailInput] = useState("");
  const [passwdInput, setPasswdInput] = useState("");

  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwdIsValid, setPasswdIsValid] = useState(false);

  const [passwdIsDisplayed, setPasswdIsDisplayed] = useState(false);

  useEffect(() => {
    InputValidator.email(emailInput, (value) => setEmailIsValid(!value));
    InputValidator.loginPassword(passwdInput, setPasswdIsValid);
  }, [emailInput, passwdInput]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <BoldText style={styles.bigText}>Log into account</BoldText>
        <RegularText style={{ ...styles.smallSpacingTop, ...styles.smallText }}>
          Welcome back to Omnihale, please enter your login details to access
          your account
        </RegularText>

        <InputWithIcon
          icon={() => <MailIcon />}
          onChangeText={(value) => setEmailInput(value)}
          value={emailInput}
        />

        <View style={styles.passwordWrapper}>
          <PasswordInputWithIcon
            icon={() => <LockIcon />}
            placeholder="Enter password"
            onChangeText={(value) => setPasswdInput(value)}
            value={passwdInput}
            passwdIsDisplayed={passwdIsDisplayed}
            eyeVisibleOnPress={() => setPasswdIsDisplayed(true)}
            eyeInvisibleOnPress={() => setPasswdIsDisplayed(false)}
          />
        </View>

        <Pressable
          onPress={() => {
            router.push("/login/");
          }}
        >
          <MediumText
            style={{
              ...styles.greenText,
              ...styles.mediumText,
              ...styles.forgotPassword
            }}
          >
            Forgot password?
          </MediumText>
        </Pressable>
      </View>

      <View style={{ marginVertical: 30 }}>
        {emailIsValid && passwdIsValid ? (
          <GreenButton
            onPress={() => {
              router.push("/create/verify");
            }}
          >
            Log into account
          </GreenButton>
        ) : (
          <View>
            <GreyButton>Log into account</GreyButton>
          </View>
        )}
        <View style={styles.createAccount}>
          <RegularText
            style={{ ...styles.smallSpacingTop, ...styles.smallText }}
          >
            Don't have an account with us?
          </RegularText>
          <Pressable onPress={() => router.push("/create/")}>
            <MediumText
              style={{
                ...styles.greenText,
                ...styles.mediumText,
                ...styles.createAccountText
              }}
            >
              Create an account
            </MediumText>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const viewPortHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  passwordWrapper: { position: "relative", marginTop: -24 },
  forgotPassword: { textAlign: "right", paddingRight: 5 },
  createAccount: {
    marginTop: -32,
    marginLeft: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  createAccountText: { marginTop: 14, marginLeft: 5 },
  ...globalStyle(viewPortHeight)
});
