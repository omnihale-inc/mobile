import renderer from "react-test-renderer";

import InputWithIcon from "../components/InputWithIcon";

it("render input with icon", () => {
  const FakeComponent = jest.fn();
  const tree = renderer
    .create(
      <InputWithIcon
        icon={() => <FakeComponent />}
        onChangeText={jest.fn()}
        value="fake value"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
