import renderer from "react-test-renderer";

import CodeInputField from "../components/CodeInputField";

it("render code input field", () => {
  const mockProps = {
    events: {
      onChangeTextHandler: jest.fn(),
      onKeyPressHandler: jest.fn(),
      onFocusHandler: jest.fn(),
      onBlurHandler: jest.fn()
    },
    value: "0",
    style: {},
    ref: null
  };
  const tree = renderer.create(<CodeInputField {...mockProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
