import { ReactNode } from "react";
import { StyleSheet, Pressable } from "react-native";

import { Text } from "./Themed";

export const GreenButton = ({
  children,
  onPress
}: {
  children: ReactNode | ReactNode[];
  onPress: () => void;
}) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.GreenButton}>{children}</Text>
    </Pressable>
  );
};

export const GreyButton = ({
  children
}: {
  children: ReactNode | ReactNode[];
}) => {
  return <Text style={styles.GreyButton}>{children}</Text>;
};

const styles = StyleSheet.create({
  GreenButton: {
    fontFamily: "SatoshiMedium",
    color: "#ffffff",
    backgroundColor: "#237e5d",
    textAlign: "center",
    paddingVertical: 22,
    fontSize: 14,
    borderRadius: 30,
    marginHorizontal: 24,
    marginBottom: 40
  },
  GreyButton: {
    fontFamily: "SatoshiMedium",
    color: "#000000",
    backgroundColor: "#d1d3d9",
    textAlign: "center",
    paddingVertical: 22,
    fontSize: 14,
    borderRadius: 30,
    marginHorizontal: 24,
    marginBottom: 40
  }
});
