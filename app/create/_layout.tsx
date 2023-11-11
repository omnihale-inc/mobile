import { Stack } from "expo-router";
import { useState } from "react";

import BackIcon from "../../components/icons/BackIcon";
import { CreateEmailContext } from "../../context/createEmailContext";

export default function CreateLayout() {
  const [createEmail, setCreateEmail] = useState("");
  return (
    <CreateEmailContext.Provider value={{ createEmail, setCreateEmail }}>
      <Stack
        screenOptions={{
          headerTitle: "",
          headerShadowVisible: false
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerLeft: () => <BackIcon screen="index" />,
            animation: "none"
          }}
        />
        <Stack.Screen
          name="verify"
          options={{ headerLeft: () => <BackIcon screen="verify" /> }}
        />
      </Stack>
    </CreateEmailContext.Provider>
  );
}
