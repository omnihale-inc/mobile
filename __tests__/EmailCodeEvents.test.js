import EmailCodeEvents from "../utils/EmailCodeEvents";

let fakeCurrentFocusField;
let mockSetCodeParameter;
let mockSetCode;

beforeEach(() => {
  fakeCurrentFocusField = {
    zero: { current: { focus: jest.fn() } },
    one: { current: { focus: jest.fn() } }
  };
  mockSetCode = (parameter) => {
    mockSetCodeParameter = parameter;
  };
});

it("testing onFocusHandler", () => {
  new EmailCodeEvents(
    0,
    mockSetCode,
    fakeCurrentFocusField,
    1
  ).onFocusHandler();

  expect(
    mockSetCodeParameter({
      value: ["-", "-"],
      state: "uncomplete"
    })
  ).toEqual({
    value: ["", "-"],
    state: "uncomplete"
  });
});

it("testing onBlurHandler", () => {
  new EmailCodeEvents(0, mockSetCode, fakeCurrentFocusField, 1).onBlurHandler();
  expect(
    mockSetCodeParameter({
      value: ["", "-"],
      state: "uncomplete"
    })
  ).toEqual({
    value: ["-", "-"],
    state: "uncomplete"
  });
});

it("testing onChangeTextHandler", () => {
  new EmailCodeEvents(
    0,
    mockSetCode,
    fakeCurrentFocusField,
    1
  ).onChangeTextHandler("1");

  // Checks the input update
  expect(
    mockSetCodeParameter({
      value: ["-", "-"],
      state: "uncomplete"
    })
  ).toEqual({
    value: ["1", "-"],
    state: "uncomplete"
  });

  // Focuses on the next field
  expect(fakeCurrentFocusField.one.current.focus).toHaveBeenCalled();

  new EmailCodeEvents(
    1,
    mockSetCode,
    fakeCurrentFocusField,
    1
  ).onChangeTextHandler("1");

  // Checks the input to be uncomplete
  expect(
    mockSetCodeParameter({
      value: ["1", "-"],
      state: "uncomplete"
    })
  ).toEqual({
    value: ["1", "1"],
    state: "complete"
  });

  new EmailCodeEvents(
    1,
    mockSetCode,
    fakeCurrentFocusField,
    1
  ).onChangeTextHandler(",");

  // Checks the input to be uncomplete
  expect(
    mockSetCodeParameter({
      value: ["1", "-"],
      state: "uncomplete"
    })
  ).toEqual({
    value: ["1", ","],
    state: "uncomplete"
  });

  new EmailCodeEvents(
    1,
    mockSetCode,
    fakeCurrentFocusField,
    1
  ).onChangeTextHandler("14");

  // Checks the input to be complete
  expect(mockSetCodeParameter).toEqual({
    value: ["1", "4"],
    state: "complete"
  });
  new EmailCodeEvents(
    1,
    mockSetCode,
    fakeCurrentFocusField,
    1
  ).onChangeTextHandler("1,");

  // Checks the input to be complete
  expect(mockSetCodeParameter).toEqual({
    value: ["1", ","],
    state: "uncomplete"
  });
});

it("testing onKeyPressHandler", () => {
  const stubSetcode = jest.fn();
  new EmailCodeEvents(
    1,
    stubSetcode,
    fakeCurrentFocusField,
    1
  ).onKeyPressHandler({ nativeEvent: { key: "Backspace" } });
  // Focuses on the previous field
  expect(fakeCurrentFocusField.zero.current.focus).toHaveBeenCalled();
});
