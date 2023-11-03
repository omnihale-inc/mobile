/**
 * Enter Email styles for the create path in the app
 * directory
 */
export type GlobalStyle = (viewPortHeight?: number) => {
  container: {
    justifyContent: "space-between"; // Update value to reflect new styles
    backgroundColor: string;
    flex: number;
    paddingTop: number;
  };
  email: {
    marginHorizontal: number;
  };
  bigText: {
    fontSize: number;
  };
  mediumText: {
    fontSize: number;
  };
  smallText: {
    fontSize: number;
  };
  otp: {
    marginTop: number;
  };
  logIn: {
    flex: 0;
    justifyContent: "space-between"; // Update value to reflect new styles
    flexDirection: "row"; // Update value to reflect new styles
  };
  greenText: {
    color: string;
  };
};
