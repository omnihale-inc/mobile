import isEmail from "validator/lib/isEmail";

const enterEmailInputValidator = (
  emailInput: string,
  setButtonTextDisable: (value: boolean) => void
) => {
  if (isEmail(emailInput)) {
    setButtonTextDisable(false);
  } else {
    setButtonTextDisable(true);
  }
};

export default enterEmailInputValidator;
