import { Create } from "../../types/create";

export const create: Create = (viewPortHeight: number) => ({
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
    fontSize: 20
  },
  otp: {
    marginTop: 10,
    fontSize: 14
  },
  logIn: {
    flex: 0,
    justifyContent: "space-between",
    flexDirection: "row"
  },
  logInElTwo: {
    color: "#237e5d"
  }
});
