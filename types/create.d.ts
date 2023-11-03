/**
 * Enter Email styles for the create path in the app
 * directory
 */
export type Create = (viewPortHeight: number) => {
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
    fontSize: number;
  };
  otp: {
    marginTop: number;
    fontSize: number;
  };
  logIn: {
    flex: 0;
    justifyContent: "space-between"; // Update value to reflect new styles
    flexDirection: "row"; // Update value to reflect new styles
  };
  logInElTwo: {
    color: string;
  };
};
