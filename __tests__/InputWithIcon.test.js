import renderer from "react-test-renderer";

import InputWithIcon from "../components/InputWithIcon";
import MailIcon from "../components/icons/MailIcon";

it("render input with icon", () => {
  const tree = renderer
    .create(
      <InputWithIcon
        icon={() => <MailIcon />}
        onChangeText={jest.fn()}
        value="fake value"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
