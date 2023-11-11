import CountDown from "new-react-native-countdown-component";
import { useEffect, useRef, useState, useContext } from "react";
import { SafeAreaView, StyleSheet, Dimensions, TextInput } from "react-native";

import { GreenButton, GreyButton } from "../../components/Button";
import CodeInputField from "../../components/CodeInputField";
import ResendCode from "../../components/ResendCode";
import { BoldText, RegularText } from "../../components/Texts";
import { View } from "../../components/Themed";
import { CreateEmailContext } from "../../context/createEmailContext";
import { globalStyle } from "../../styles/globalStyle";
import EmailCodeEvents from "../../utils/EmailCodeEvents";

export default function VerifyEmail() {
  const { createEmail } = useContext(CreateEmailContext);

  const [code, setCode] = useState({
    value: ["-", "-", "-", "-"],
    state: "uncomplete" // state = complete | uncomplete;
  });

  const [resend, setResend] = useState(false);

  const currentFocusField = {
    zero: useRef<TextInput>(null),
    one: useRef<TextInput>(null),
    two: useRef<TextInput>(null),
    three: useRef<TextInput>(null)
  };

  useEffect(() => {
    currentFocusField.zero.current?.focus();
  }, []);

  const inputs = {
    zero: new EmailCodeEvents(0, setCode, currentFocusField, 3),
    one: new EmailCodeEvents(1, setCode, currentFocusField, 3),
    two: new EmailCodeEvents(2, setCode, currentFocusField, 3),
    three: new EmailCodeEvents(3, setCode, currentFocusField, 3)
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <BoldText style={styles.bigText}>Verify your email address</BoldText>
        <RegularText style={styles.smallSpacingTop}>
          Enter the 4-code OTP sent to
          {/* Adds color to text */}{" "}
          <RegularText style={styles.greenText}>{createEmail}</RegularText>{" "}
          Please check your mail app.
        </RegularText>
        <View style={{ ...styles.bigSpacingTop, ...styles.codeInputWrapper }}>
          <CodeInputField
            {...{
              events: inputs.zero,
              value: code.value[0],
              style: styles.codeInput
            }}
            ref={currentFocusField.zero}
          />
          <CodeInputField
            {...{
              events: inputs.one,
              value: code.value[1],
              style: styles.codeInput
            }}
            ref={currentFocusField.one}
          />
          <CodeInputField
            {...{
              events: inputs.two,
              value: code.value[2],
              style: styles.codeInput
            }}
            ref={currentFocusField.two}
          />
          <CodeInputField
            {...{
              events: inputs.three,
              value: code.value[3],
              style: styles.codeInput
            }}
            ref={currentFocusField.three}
          />
        </View>
        <ResendCode
          resend={resend}
          onPress={() => setResend(false)}
          styles={{ resend: styles.resend, greenText: styles.greenText }}
          countDown={() => (
            <CountDown
              size={13}
              until={180}
              onFinish={() => setResend(true)}
              style={{ visibility: "hidden" }}
              digitStyle={{
                backgroundColor: "#FFF"
              }}
              digitTxtStyle={{
                color: "#237e5d",
                fontFamily: "SatoshiMedium",
                paddingTop: 3
              }}
              timeLabelStyle={{
                color: "red"
              }}
              separatorStyle={{ color: "#237e5d" }}
              timeToShow={["M", "S"]}
              timeLabels={{ m: "", s: "" }}
              showSeparator
            />
          )}
        />
      </View>

      <View>
        {code.state === "complete" ? (
          <GreenButton onPress={() => {}}>Confirm</GreenButton>
        ) : (
          <GreyButton>Confirm</GreyButton>
        )}
      </View>
    </SafeAreaView>
  );
}

const viewPortHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  codeInput: {
    borderColor: "#237e5d",
    textAlign: "center",
    borderWidth: 1,
    width: 75,
    paddingVertical: 13,
    borderRadius: 20,
    fontSize: 30
  },
  codeInputHidden: {
    color: "fff"
  },
  codeInputWrapper: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  resend: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4.5
  },
  ...globalStyle(viewPortHeight)
});
