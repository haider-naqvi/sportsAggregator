import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  profileBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 16,
  },
  subTitle: {
    fontFamily: "Montserrat",
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 22,
    color: "rgba(127, 127, 127, 1)",
  },
  listBox: {
    display: "flex",
    flexDirection: "row",
    // justifyContent:,
    alignItems: "center",
    flexWrap:"wrap",
    gap: 42,
    paddingHorizontal: 5,
  },
  context:{
    fontFamily:"Montserrat",
    fontSize:12,
    fontWeight:400,
    lineHeight:22,
    color:"rgba(127, 127, 127, 1)",
    paddingVertical:14
  }
});
