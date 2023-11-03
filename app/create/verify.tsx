import { SafeAreaView, StyleSheet, Dimensions } from "react-native";

import { View } from "../../components/Themed";
import { globalStyle } from "../../styles/globalStyle";

export default function VerifyEmail() {
  return (
    <SafeAreaView style={styles.container}>
      <View />
    </SafeAreaView>
  );
}

const viewPortHeight = Dimensions.get("window").height;
const styles = StyleSheet.create(globalStyle(viewPortHeight));
