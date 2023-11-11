import {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData
} from "react-native";
import isNumeric from "validator/lib/isNumeric";

interface SetCodeType {
  value: string[];
  state: string;
}

interface CurrentFocusFieldType {
  zero: React.MutableRefObject<TextInput | null>;
  one: React.MutableRefObject<TextInput | null>;
  two: React.MutableRefObject<TextInput | null>;
  three: React.MutableRefObject<TextInput | null>;
}

export class EmailCodeEvents {
  private index: number;
  private setCode: (
    value: SetCodeType | { (value: SetCodeType): SetCodeType }
  ) => void;
  private currentFocusField: CurrentFocusFieldType;
  private currentFocusFieldArray: [string, any][];
  private totalIndices: number;
  constructor(
    index: number,
    setCode: (
      value: SetCodeType | { (value: SetCodeType): SetCodeType }
    ) => void,
    currentFocusField: CurrentFocusFieldType,
    totalIndices: number
  ) {
    this.index = index;
    this.setCode = setCode;
    this.currentFocusField = currentFocusField;
    this.currentFocusFieldArray = Object.entries(this.currentFocusField);
    this.totalIndices = totalIndices;
  }

  onFocusHandler = () => {
    this.setCode(this.onFocusHandlerSetCodeCallback);
  };

  private onFocusHandlerSetCodeCallback = (state: SetCodeType) => {
    // Removes the current input value when the user focuses on
    // the field
    const removeCurrentInput = "";
    const newState = { ...state };
    newState.value[this.index] = removeCurrentInput;
    return {
      ...newState
    };
  };

  onBlurHandler = () => {
    this.setCode(this.onBlurHandlerSetCodeCallback);
  };

  private onBlurHandlerSetCodeCallback = (state: SetCodeType) => {
    // Replaces the input field with the - symbol, when the user switches
    // input field without filling it
    const emptyPlaceHolder = "-";
    const newState = { ...state };
    if (state.value[this.index] === "" || state.value[this.index] === " ") {
      newState.value[this.index] = emptyPlaceHolder;
    }
    return {
      ...newState,
      state: "uncomplete"
    };
  };

  onChangeTextHandler = (changeValue: string) => {
    // Auto focus the next code input field after input change
    if (
      this.index + 1 !== this.totalIndices &&
      !this.isLengthWithinTotalIndicies(changeValue)
    ) {
      this.currentFocusFieldArray[this.index + 1][1]["current"].focus();
    }
    // Handles when input is paste, it auto spreads the paste values
    // to cover all the input fields
    if (this.isLengthWithinTotalIndicies(changeValue)) {
      this.setCode({
        value: [...changeValue.trim().split("")],
        // validates that the input values are all numbers
        state: isNumeric(changeValue) ? "complete" : "uncomplete"
      } as SetCodeType);
      return;
    }
    // Make changes to the values based on the user inputs and coverts the string to
    // an array as it should be.
    const oldValue = changeValue.split("");
    const newValue =
      oldValue.length === 0 ? changeValue : oldValue[oldValue.length - 1];
    this.setCode((state) => {
      const newState = { ...state };
      newState.value[this.index] = newValue;
      // Checks if the input has a number value in place
      if (!newState.value.join("").includes("-"))
        return {
          ...newState,
          // validates that the input values are all numbers
          state: isNumeric(newState.value.join("")) ? "complete" : "uncomplete"
        };
      return { ...newState, state: "uncomplete" };
    });
  };
  onKeyPressHandler = (
    key: NativeSyntheticEvent<TextInputKeyPressEventData>
  ) => {
    if (key.nativeEvent.key === "Backspace" && this.index !== 0) {
      this.currentFocusFieldArray[this.index - 1][1]["current"].focus();
    }
  };
  private isLengthWithinTotalIndicies = (changeValue: string) => {
    if (changeValue.trim().split("").length >= this.totalIndices) {
      return true;
    }
    return false;
  };
}

export default EmailCodeEvents;
