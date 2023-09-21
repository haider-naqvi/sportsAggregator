import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  card: {
    backgroundColor: "rgba(243, 243, 243, 1)",
    height: "auto",
    position: "relative",
  },

  userPic: {
    position: "absolute",
    alignSelf: "center",
    top: 135,
  },
  ContentBox: { alignSelf: "center", top: 40 },
  titleText: {
    fontSize: 13,
    lineHeight: 13,
    paddingBottom: 0,
    fontWeight: 500,
    fontFaimly: "Montserrat",
    color: "rgba(0, 0, 0, 1)",
  },
  subtext: {
    fontSize: 8,
    lineHeight: 13,
    fontWeight: 400,
    fontFaimly: "Montserrat",
    color: "rgba(127, 127, 127, 1)",
    textAlign:"center",
    textAlignVertical:"center"
  },
  folloBtn: {
    alignSelf: "center",
    color: "rgba(255, 255, 255, 1)",
    lineHeight: 20,
    fontWeight: 500,
    fontSize: 12,
    fontFamily: "Montserrat",
  },
  cardFooter: {
    justifyContent: "space-between",
    display: "flex",
    alignItems: "end",
    flexDirection: "row",
    paddingHorizontal:15,
    paddingBottom:10,
    height:60
  },
  vistBtn: {
    backgroundColor: "rgba(252, 114, 77, 1)",
    lineHeight: 20,
    fontWeight: 500,
    fontSize: 12,
    paddingHorizontal: 32,
    paddingVertical: 2,
    width: 120,
    color: "#FFF",
    borderRasdius: 6,
    alignSelf: "flex-start",
  },
  ContentFooterBox: {
    justifyContent: "space-between",
    flexDirection: "row",

  },
});
