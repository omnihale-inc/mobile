import renderer from "react-test-renderer";

import ResendCode from "../components/ResendCode";

it("render with counter", () => {
  const tree = renderer
    .create(
      <ResendCode
        resend={false}
        setResend={jest.fn()}
        countDown={() => "00:34"}
        styles={{ resend: {}, greenText: {} }}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("render without counter", () => {
  const tree = renderer
    .create(
      <ResendCode
        resend
        setResend={jest.fn()}
        countDown={() => "00:34"}
        styles={{ resend: {}, greenText: {} }}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
