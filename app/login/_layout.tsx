import { Stack } from "expo-router";

import BackIcon from "../../components/icons/BackIcon";

export default function LoginLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: "",
        headerShadowVisible: false
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerLeft: () => <BackIcon screen="/create/" />
        }}
      />
    </Stack>
  );
}
