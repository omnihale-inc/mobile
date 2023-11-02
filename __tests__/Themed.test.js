import * as React from "react";
import renderer from "react-test-renderer";

import { Text, View } from "../components/Themed";

it(`renders Text correctly`, () => {
  const tree = renderer.create(<Text>Snapshot test!</Text>).toJSON();

  expect(tree).toMatchSnapshot();
});
it(`renders View correctly`, () => {
  const tree = renderer
    .create(
      <View>
        <Text>Snapshot test!</Text>
      </View>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
