import { GlobalStyle } from "../types/globalStyle";

export const globalStyle: GlobalStyle = (viewPortHeight) => ({
  container: {
    justifyContent: "space-between",
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: viewPortHeight! * (1 / 100) || 0,
    paddingHorizontal: 24
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
  smallSpacingTop: {
    marginTop: 16
  },
  bigSpacingTop: {
    marginTop: 25
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
