import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    height: "100vh",
  },
  logo: {
    fontFamily: "Montserrat",
    fontSize: 32,
    lineHeight: 48,
    color: "rgba(32, 33, 34, 1)",
    textAlign: "center",
    textAlignVertical: "center",
  },
  welcomeBox: {
    paddingBottom: 223,
    paddingTop: 138,
  },
  welcomeText: {
    fontFamily: "MonteCarlo",
    fontSize: 60,
    lineHeight: 48,
    fontWeight: 400,
    color: "rgba(32, 33, 34, 1)",
    alignItems: "center",
    textAlignVertical: "center",
  },
  welcomePrha: {
    fontFamily: "Montserrat",
    fontSize: 14,
    lineHeight: 48,
    fontWeight: 400,
    color: "rgba(32, 33, 34, 1)",
    alignItems: "center",
    paddingTop: 10,
    textAlignVertical: "center",
  },
  btn:{
    width:326,
    minHeight:65,
    fontFamily: "Montserrat",
    fontSize: 14,
    lineHeight: 48,
    fontWeight: 600,
    paddingVertical:25
  }
});
