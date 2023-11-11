import React from "react";
import {
  NativeSyntheticEvent,
  StyleProp,
  TextInput,
  TextInputKeyPressEventData,
  TextStyle
} from "react-native";

export type CodeInputFieldProps = {
  events: {
    onChangeTextHandler(changeValue: string): void;
    onKeyPressHandler(
      key: NativeSyntheticEvent<TextInputKeyPressEventData>
    ): void;
    onFocusHandler(): void;
    onBlurHandler(): void;
  };
  value: string;
  style: StyleProp<TextStyle>;
};

const CodeInputField = React.forwardRef(
  (
    { events, value, style }: CodeInputFieldProps,
    ref: React.ForwardedRef<TextInput | null>
  ) => {
    return (
      <TextInput
        onChangeText={(changeValue) => events.onChangeTextHandler(changeValue)}
        value={value}
        style={style}
        onFocus={events.onFocusHandler}
        onBlur={events.onBlurHandler}
        keyboardType="numeric"
        ref={ref}
        onKeyPress={(key) => events.onKeyPressHandler(key)}
      />
    );
  }
);

export default CodeInputField;
