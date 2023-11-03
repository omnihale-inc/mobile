import { router } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, Dimensions } from "react-native";

import { GreenButton, GreyButton } from "../../components/Button";
import InputWithIcon from "../../components/InputWithIcon";
import { BoldText, MediumText, RegularText } from "../../components/Texts";
import { View } from "../../components/Themed";
import MailIcon from "../../components/icons/MailIcon";
import { globalStyle } from "../../styles/globalStyle";
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
        <BoldText style={styles.bigText}>Enter your email Address</BoldText>
        <RegularText style={{ ...styles.otp, ...styles.smallText }}>
          A 4-code OTP will be sent to your email to verify your account.
        </RegularText>
        <InputWithIcon
          icon={() => <MailIcon />}
          onChangeText={(value) => setEmailInput(value)}
          value={emailInput}
        />
        <View style={styles.logIn}>
          <RegularText style={styles.smallText}>
            Have an account with us?
          </RegularText>
          <MediumText style={{ ...styles.greenText, ...styles.mediumText }}>
            Log in
          </MediumText>
        </View>
      </View>
      <View>
        {buttonTextDisable ? (
          <GreyButton>Send code</GreyButton>
        ) : (
          <GreenButton
            onPress={() => {
              router.push("/create/verify");
            }}
          >
            Send code
          </GreenButton>
        )}
      </View>
    </SafeAreaView>
  );
}

const viewPortHeight = Dimensions.get("window").height;

const styles = StyleSheet.create(globalStyle(viewPortHeight));
