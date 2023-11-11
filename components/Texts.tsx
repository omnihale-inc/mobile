import { ReactNode } from "react";
import { TextStyle } from "react-native";

import { Text } from "./Themed";

export const BoldText = ({
  style,
  children
}: {
  children: ReactNode;
  style?: TextStyle;
}) => <Text style={{ fontFamily: "SatoshiBold", ...style }}>{children}</Text>;

export const RegularText = ({
  children,
  style
}: {
  children: ReactNode;
  style?: TextStyle;
}) => (
  <Text style={{ fontFamily: "SatoshiRegular", ...style }}>{children}</Text>
);

export const MediumText = ({
  children,
  style
}: {
  children: ReactNode;
  style?: TextStyle;
}) => <Text style={{ fontFamily: "SatoshiMedium", ...style }}>{children}</Text>;
