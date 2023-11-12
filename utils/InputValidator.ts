import isEmail from "validator/lib/isEmail";

type SetState = (value: boolean) => void;
class InputValidator {
  /* istanbul ignore next */
  private constructor() {}

  static email = (email: string, setState: SetState) => {
    if (isEmail(email)) {
      setState(false);
    } else {
      setState(true);
    }
  };

  static loginPassword = (password: string, setState: SetState) => {
    if (password.length > 0) {
      setState(true);
    } else {
      setState(false);
    }
  };
}

export default InputValidator;
