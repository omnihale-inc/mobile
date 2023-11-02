import { router } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, Dimensions, TextInput } from "react-native";

import { enterEmail } from "../../assets/styles/create";
import { GreenButton, GreyButton } from "../../components/Button";
import { Text, View } from "../../components/Themed";
import MailIcon from "../../components/icons/MailIcon";
import enterEmailInputValidator from "../../utils/create/enterEmailInputValidator";

export default function EnterEmail() {
  const [buttonTextDisable, setButtonTextDisable] = useState(true);
  const [emailInput, setEmailInput] = useState("");

  // Check the email input and validates it on every change
  useEffect(
    () => enterEmailInputValidator(emailInput, setButtonTextDisable),
    [emailInput]
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.email}>
        <Text style={styles.enterText}>Enter your email Address</Text>
        <Text style={styles.otp}>
          A 4-code OTP will be sent to your email to verify your account.
        </Text>
        <View style={styles.emailInputWrapper}>
          <TextInput
            style={styles.emailInput}
            placeholder="Enter Email address"
            keyboardType="email-address"
            value={emailInput}
            onChangeText={(value) => setEmailInput(value)}
          />
          <View style={styles.emailIcon}>
            <MailIcon />
          </View>
        </View>
        <View style={styles.logIn}>
          <Text style={styles.logInElOne}>Have an account with us?</Text>
          <Text style={styles.logInElTwo}>Log in</Text>
        </View>
      </View>
      <View>
        {buttonTextDisable ? (
          <GreyButton>Send code</GreyButton>
        ) : (
          <GreenButton onPress={() => router.push("/")}>Send code</GreenButton>
        )}
      </View>
    </SafeAreaView>
  );
}

const viewPortHeight = Dimensions.get("window").height;

const styles = StyleSheet.create(enterEmail(viewPortHeight));
