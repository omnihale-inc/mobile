import enterEmailInputValidator from "../utils/create/enterEmailInputValidator";

it("button disable toggle", () => {
  const setButtonTextDisableMock = jest.fn();

  enterEmailInputValidator("test", setButtonTextDisableMock); // Invalid Email
  expect(setButtonTextDisableMock).toHaveBeenCalledWith(true);

  enterEmailInputValidator("test@email.com", setButtonTextDisableMock); // Valid Email
  expect(setButtonTextDisableMock).toHaveBeenCalledWith(false);
});
