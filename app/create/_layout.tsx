import { Stack } from "expo-router";

import BackIcon from "../../components/icons/BackIcon";

export default function CreateLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: "",
        headerShadowVisible: false
      }}
    >
      <Stack.Screen
        name="index"
        options={{ headerLeft: () => <BackIcon screen="index" /> }}
      />
      <Stack.Screen
        name="verify"
        options={{ headerLeft: () => <BackIcon screen="verify" /> }}
      />
    </Stack>
  );
}
