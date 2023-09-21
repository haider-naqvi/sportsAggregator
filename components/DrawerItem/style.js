import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    backgroundColor: "rgba(243, 243, 243, 1)",
    paddingHorizontal: 31,
    width: 331,
    height: "100vh",
    borderRadius: 5,
    shadow: "rgba(0, 0, 0, 0.25)",
  },
  iconBox: {
    height: 37,
    width: 37,
    borderRadius: "50%",
    backgroundColor: "rgba(253, 138, 107, 1)",
    color: "#FFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 28,
    left: 31,
  },
  sidebarBox: {
    width: "100%",
    display: "flex ",
    alignItems: "center",
  },
  userBox: {
    position: "relative",
    marginTop: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
  },
  userPic: {
    height: 128,
    width: 128,
    borderRadius: "50%",
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    objectFit: "cover",
  },
  edit: {
    position: "absolute",
    backgroundColor: "rgba(253, 138, 107, 1)",
    width: 27,
    height: 27,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    top: 100,
    left: 89,
  },
  userName: {
    color: "rgba(253, 138, 107, 1)",
    fontFamily: "Montserrat",
    fontSize: 12,
    lineHeight: 24,
    fontWeight: 600,
    textAlign: "center",
    textAlignVertical: "center",
    paddingHorizontal:20,
    paddingVertical:12
  },
itemText:{
  color: "rgba(64, 69, 74, 1)",
  textAlign: "left",
  fontSize: 16,
  fontWeight: 500,
  lineHeight: 24,
  fontFaimly: "Inter",
  marginBottom:16
}
});
