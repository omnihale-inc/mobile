import { GlobalStyle } from "../types/globalStyle";

export const globalStyle: GlobalStyle = (viewPortHeight) => ({
  container: {
    justifyContent: "space-between",
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: (viewPortHeight! * 5) / 100 || 0
  },
  email: {
    marginHorizontal: 24
  },
  bigText: {
    fontSize: 20
  },
  mediumText: {
    fontSize: 16
  },
  smallText: {
    fontSize: 14
  },
  otp: {
    marginTop: 10
  },
  logIn: {
    flex: 0,
    justifyContent: "space-between",
    flexDirection: "row"
  },
  greenText: {
    color: "#237e5d"
  }
});
