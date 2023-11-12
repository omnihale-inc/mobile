import InputValidator from "../utils/InputValidator";

it("email validation", () => {
  const setStateMock = jest.fn();

  InputValidator.email("test", setStateMock); // Invalid Email
  expect(setStateMock).toHaveBeenCalledWith(true);

  InputValidator.email("test@email.com", setStateMock); // Valid Email
  expect(setStateMock).toHaveBeenCalledWith(false);
});

it("login password", () => {
  const setStateMock = jest.fn();

  InputValidator.loginPassword("", setStateMock); // Password not empty
  expect(setStateMock).toHaveBeenCalledWith(false);

  InputValidator.loginPassword("fakePassword", setStateMock); //Password empty
  expect(setStateMock).toHaveBeenCalledWith(true);
});
