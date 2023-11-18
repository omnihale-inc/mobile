import { Stack } from "expo-router";

import BackIcon from "../../components/icons/BackIcon";
import RecoverAccountContextProvider from "../../context/recoverAccountContext";

export default function LoginLayout() {
  return (
    <RecoverAccountContextProvider>
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

        <Stack.Screen
          name="forgot-password"
          options={{
            headerLeft: () => <BackIcon screen="/login/" />
          }}
        />

        <Stack.Screen
          name="account-recovery"
          options={{
            headerLeft: () => <BackIcon screen="forgot-password" />
          }}
        />

        <Stack.Screen
          name="change-password"
          options={{
            headerLeft: () => <BackIcon screen="forgot-password" />
          }}
        />
      </Stack>
    </RecoverAccountContextProvider>
  );
}
