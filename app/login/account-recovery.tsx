import { router } from "expo-router";
import { useContext } from "react";
import { Dimensions, SafeAreaView, StyleSheet } from "react-native";

import { GreenButton } from "../../components/Button";
import { BoldText, RegularText } from "../../components/Texts";
import { View } from "../../components/Themed";
import { RecoverAccountContext } from "../../context/recoverAccountContext";
import { globalStyle } from "../../styles/globalStyle";

export default function AccountRecovery() {
  const { email } = useContext(RecoverAccountContext);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <BoldText style={styles.bigText}>Account recovery</BoldText>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <RegularText
            style={{ ...styles.smallSpacingTop, ...styles.smallText }}
          >
            Instructions have been sent to
          </RegularText>
          <RegularText
            style={{
              ...styles.smallSpacingTop,
              ...styles.greenText,
              ...styles.smallText,
              paddingLeft: 5
            }}
          >
            {email}
          </RegularText>
        </View>
        <RegularText style={{ ...styles.smallSpacingTop, ...styles.smallText }}>
          Please check your message app
        </RegularText>
      </View>

      <View style={{ marginVertical: 30 }}>
        <GreenButton
          onPress={() => {
            router.push("/login/change-password");
          }}
        >
          Proceed
        </GreenButton>
      </View>
    </SafeAreaView>
  );
}

const viewPortHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  ...globalStyle(viewPortHeight)
});
