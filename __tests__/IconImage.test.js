import renderer from "react-test-renderer";

import IconImage from "../components/icons/IconImage";

it("render icon image", () => {
  const tree = renderer
    .create(<IconImage imageSource={() => "path/to/imagee"} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
