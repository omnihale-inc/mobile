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
import enterEmailInputValidator from "../../utils/enterEmailInputValidator";

export default function Login() {
  const [emailInput, setEmailInput] = useState("");
  const [passwdInput, setPasswdInput] = useState("");

  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwdIsValid, setPasswdIsValid] = useState(false);

  useEffect(() => {
    enterEmailInputValidator(emailInput, (value) => setEmailIsValid(!value));
    if (passwdInput.length > 0) {
      setPasswdIsValid(true);
    } else {
      setPasswdIsValid(false);
    }
  }, [emailInput, passwdInput]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <BoldText style={styles.bigText}>Log into account</BoldText>
        <RegularText style={{ ...styles.smallSpacingTop, ...styles.smallText }}>
          Welcome back to MedLife, please enter your login details to access
          your account
        </RegularText>

        <InputWithIcon
          icon={() => <MailIcon />}
          onChangeText={(value) => setEmailInput(value)}
          value={emailInput}
        />

        <View style={{ position: "relative", marginTop: -24 }}>
          <PasswordInputWithIcon
            icon={() => <LockIcon />}
            placeholder="Enter password"
            onChangeText={(value) => setPasswdInput(value)}
            value={passwdInput}
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
              textAlign: "right",
              paddingRight: 5
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
        <View
          style={{
            marginTop: -32,
            marginLeft: 5,
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <RegularText
            style={{ ...styles.smallSpacingTop, ...styles.smallText }}
          >
            Don't have an account with us?
          </RegularText>
          <Pressable>
            <MediumText
              style={{
                ...styles.greenText,
                ...styles.mediumText,
                marginTop: 14,
                marginLeft: 5
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

const styles = StyleSheet.create(globalStyle(viewPortHeight));
