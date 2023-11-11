import { router } from "expo-router";
import { useEffect, useState, useContext } from "react";
import { StyleSheet, SafeAreaView, Dimensions, Pressable } from "react-native";

import { GreenButton, GreyButton } from "../../components/Button";
import InputWithIcon from "../../components/InputWithIcon";
import { BoldText, MediumText, RegularText } from "../../components/Texts";
import { View } from "../../components/Themed";
import MailIcon from "../../components/icons/MailIcon";
import {
  CreateEmailContext,
  CreateEmailContextType
} from "../../context/createEmailContext";
import { globalStyle } from "../../styles/globalStyle";
import enterEmailInputValidator from "../../utils/enterEmailInputValidator";

export default function EnterEmail() {
  const [buttonTextDisable, setButtonTextDisable] = useState(true);
  const [emailInput, setEmailInput] = useState("");
  const { setCreateEmail } =
    useContext<CreateEmailContextType>(CreateEmailContext);

  // Check the email input and validates it on every change
  useEffect(
    () => enterEmailInputValidator(emailInput, setButtonTextDisable),
    [emailInput]
  );
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <BoldText style={styles.bigText}>Enter your email Address</BoldText>
        <RegularText style={{ ...styles.smallSpacingTop, ...styles.smallText }}>
          A 4-code OTP will be sent to your email to verify your account.
        </RegularText>
        <InputWithIcon
          icon={() => <MailIcon />}
          placeholder="Enter Email address"
          onChangeText={(value) => setEmailInput(value)}
          value={emailInput}
        />
        <View style={styles.logIn}>
          <RegularText style={styles.smallText}>
            Have an account with us?
          </RegularText>

          <Pressable
            onPress={() => {
              router.push("/login/");
            }}
          >
            <MediumText style={{ ...styles.greenText, ...styles.mediumText }}>
              Log in
            </MediumText>
          </Pressable>
        </View>
      </View>
      <View>
        {buttonTextDisable ? (
          <GreyButton>Send code</GreyButton>
        ) : (
          <GreenButton
            onPress={() => {
              router.push("/create/verify");
              setCreateEmail(emailInput);
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
