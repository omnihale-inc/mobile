import { EnterEmail } from "../../types/create";

export const enterEmail: EnterEmail = (viewPortHeight: number) => ({
  container: {
    justifyContent: "space-between",
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: (viewPortHeight * 5) / 100
  },
  email: {
    marginHorizontal: 24
  },
  enterText: {
    fontFamily: "SatoshiBold",
    fontSize: 20
  },
  otp: {
    fontFamily: "SatoshiRegular",
    marginTop: 10,
    fontSize: 14
  },
  logIn: {
    flex: 0,
    justifyContent: "space-between",
    flexDirection: "row"
  },
  logInElOne: {
    fontFamily: "SatoshiRegular"
  },
  logInElTwo: {
    color: "#237e5d",
    fontFamily: "SatoshiMedium"
  }
});
