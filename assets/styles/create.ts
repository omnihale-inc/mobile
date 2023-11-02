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
  emailInputWrapper: {
    position: "relative"
  },
  emailInput: {
    borderColor: "#d1d3d9",
    fontFamily: "SatoshiRegular",
    borderWidth: 1,
    marginVertical: 24,
    paddingVertical: 15,
    paddingLeft: 55,
    paddingRight: 40,
    borderRadius: 30,
    fontSize: 17
  },
  emailIcon: { position: "absolute", top: 43, left: 22 },
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
