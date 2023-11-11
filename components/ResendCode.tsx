import { ReactNode } from "react";
import { Pressable, TextStyle, View, ViewStyle } from "react-native";

import { RegularText } from "./Texts";

const ResendCode = ({
  resend,
  onPress,
  styles,
  countDown
}: {
  resend: boolean;
  onPress: () => void;
  styles: { resend: ViewStyle; greenText: TextStyle };
  countDown: () => ReactNode;
}) => {
  return !resend ? (
    <View style={styles.resend}>
      <RegularText>Resend code in</RegularText>
      {countDown()}
    </View>
  ) : (
    <Pressable onPress={onPress}>
      <RegularText style={{ paddingTop: 12, ...styles.greenText }}>
        Resend code
      </RegularText>
    </Pressable>
  );
};

export default ResendCode;
