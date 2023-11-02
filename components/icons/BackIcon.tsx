import { router } from "expo-router";
import { BackHandler } from "react-native";

import IconImage from "./IconImage";

const BackIcon = ({ screen }: { screen: string }) => {
  return (
    <IconImage
      onPress={() =>
        screen === "index" ? BackHandler.exitApp() : router.back()
      }
      imageSource={() => require("../../assets/images/Line-arrow-left.svg")}
    />
  );
};

export default BackIcon;
