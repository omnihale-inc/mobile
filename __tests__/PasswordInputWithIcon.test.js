import renderer from "react-test-renderer";

import PasswordInputWithIcon from "../components/PasswordInputWithIcon";

it("render password input with icon", () => {
  const FakeComponent = jest.fn();
  const tree = renderer
    .create(
      <PasswordInputWithIcon
        icon={() => <FakeComponent />}
        onChangeText={jest.fn()}
        value="fake value"
        secureText={false}
        placeholder="fake value"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
