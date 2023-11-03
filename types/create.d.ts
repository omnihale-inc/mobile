/**
 * Enter Email styles for the create path in the app
 * directory
 */
export type EnterEmail = (viewPortHeight: number) => {
  container: {
    justifyContent: "space-between"; // Update value to reflect new styles
    backgroundColor: string;
    flex: number;
    paddingTop: number;
  };
  email: {
    marginHorizontal: number;
  };
  enterText: {
    fontFamily: string;
    fontSize: number;
  };
  otp: {
    fontFamily: string;
    marginTop: number;
    fontSize: number;
  };
  logIn: {
    flex: 0;
    justifyContent: "space-between"; // Update value to reflect new styles
    flexDirection: "row"; // Update value to reflect new styles
  };
  logInElOne: {
    fontFamily: string;
  };
  logInElTwo: {
    color: string;
    fontFamily: string;
  };
};
