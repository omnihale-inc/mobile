import * as React from "react";
import renderer from "react-test-renderer";

import { MonoText } from "../StyledText";

it(`renders correctly`, () => {
  const tree = renderer.create(<MonoText>Snapshot test!</MonoText>).toJSON();

  expect(tree).toMatchSnapshot();
});

it("fail", () => {
  const value = 32;
  expect(value).toBe(30);
});
