import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: "flex",
    paddingHorizontal: 27,
  },
  headingBox: {
    // marginTop: 29,
    marginBottom: 40,
  },
  heading: {
    fontFamily: "Montserrat",
    fontWeight: 600,
    fontSizeL: 14,
    lineHeight: 25,
    paddingTop: 10,
    color: "rgba(0, 0, 0, 1)",
  },
  subHeading: {
    fontFamily: "Montserrat",
    fontWeight: 400,
    fontSizeL: 10,
    lineHeight: 25,
    color: "rgba(127, 127, 127, 1)",
  },
  btnBox:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    gap:17
  },
  tabBtn: {
    width: 100,
    borderBlockColor: "#FFF",
    borderRadius: 6,
    margin: 0,
  },
  styleBtn: {
    borderRadius: 5,
    borderColor: "#FFF",
    margin: 0,
  },
  labelBtnText: {
    lineHeight: 17,
    fontSize: 10,
    fontWeight: 400,
    color: "rgba(255, 255, 255, 1)",
    marginLeft: 0,
    marginRight: 0,
  },
});
