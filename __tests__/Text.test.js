import renderer from "react-test-renderer";

import { BoldText, MediumText, RegularText } from "../components/Texts";

it("render bold satoshi text", () => {
  const tree = renderer
    .create(<BoldText style={{ fontSize: 20 }}>Bold Text</BoldText>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("render medium satoshi text", () => {
  const tree = renderer
    .create(<MediumText style={{ fontSize: 20 }}>Medium Text</MediumText>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("render regular satoshi text", () => {
  const tree = renderer
    .create(<RegularText style={{ fontSize: 20 }}>Regular Text</RegularText>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
