import renderer from "react-test-renderer";

import { GreyButton, GreenButton } from "../components/Button";

it("render grey button", () => {
  const tree = renderer.create(<GreyButton>grey button</GreyButton>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("render green button", () => {
  const tree = renderer
    .create(<GreenButton onPress={jest.fn()}>green button</GreenButton>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
