import renderer from "react-test-renderer";

import EnterEmail from "../app/create/index";

it("render enter email screen", () => {
  const tree = renderer.create(<EnterEmail />).toJSON();
  expect(tree).toMatchSnapshot();
});
