import renderer from "react-test-renderer";

import PasswordInputWithIcon from "../components/PasswordInputWithIcon";

it("render password input securetextEntry as false", () => {
  const FakeComponent = jest.fn();
  const tree = renderer
    .create(
      <PasswordInputWithIcon
        icon={() => <FakeComponent />}
        onChangeText={jest.fn()}
        value="fake value"
        secureText={false}
        placeholder="fake value"
        eyeInvisibleOnPress={jest.fn()}
        eyeVisibleOnPress={jest.fn()}
        passwdIsDisplayed
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("render password input securetextEntry as true", () => {
  const FakeComponent = jest.fn();
  const tree = renderer
    .create(
      <PasswordInputWithIcon
        icon={() => <FakeComponent />}
        onChangeText={jest.fn()}
        value="fake value"
        secureText={false}
        placeholder="fake value"
        eyeInvisibleOnPress={jest.fn()}
        eyeVisibleOnPress={jest.fn()}
        passwdIsDisplayed={false}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
