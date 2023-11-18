import { router } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { Dimensions, SafeAreaView, StyleSheet } from "react-native";

import { GreenButton, GreyButton } from "../../components/Button";
import InputWithIcon from "../../components/InputWithIcon";
import { BoldText, RegularText } from "../../components/Texts";
import { View } from "../../components/Themed";
import MailIcon from "../../components/icons/MailIcon";
import { RecoverAccountContext } from "../../context/recoverAccountContext";
import { globalStyle } from "../../styles/globalStyle";
import InputValidator from "../../utils/InputValidator";

export default function ForgotPassword() {
  const { setEmail } = useContext(RecoverAccountContext);

  const [emailInput, setEmailInput] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);

  const handleSubmit = () => {
    setEmail(emailInput);
    router.push("/login/account-recovery");
  };

  useEffect(() => {
    InputValidator.email(emailInput, (value) => setEmailIsValid(!value));
  }, [emailInput]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <BoldText style={styles.bigText}>Forgot password</BoldText>
        <RegularText style={{ ...styles.smallSpacingTop, ...styles.smallText }}>
          Welcome back to Omnihale, please enter your login details to access
          your account
        </RegularText>

        <InputWithIcon
          icon={() => <MailIcon />}
          onChangeText={(value) => setEmailInput(value)}
          value={emailInput}
        />
      </View>

      <View style={{ marginVertical: 30 }}>
        {emailIsValid ? (
          <GreenButton onPress={handleSubmit}>Continue</GreenButton>
        ) : (
          <View>
            <GreyButton>Continue</GreyButton>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const viewPortHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  ...globalStyle(viewPortHeight)
});
