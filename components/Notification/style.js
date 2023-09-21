import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  wrapper: {
    // marginTop: 85,
  },
  title_Style: {
    color: "rgba(63, 63, 63, 1)",
    fontFamily: "Montserrat",
    // fontWeight: 400,
    fontSize: 10,
    lineHeight: 12,
  },
  right_txt: {
    fontFamily: "SF Pro Text",
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 14,
    color: "rgba(63, 63, 63, 1)",
  },
  sport_text: {
    color: "rgba(252, 114, 77, 1)",
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 16,
  },
  massage_title: {
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: 15,
    lineHeight: 20,
    color: "rgba(34, 34, 34, 1)",
    paddingLeft:10,
    paddingBottom:5
  },
  flex:{
    display: "flex",
    flexDirection: "row",
  },
  btn:{
    flexBasis:"50%",
    paddingVertical:14,
    backgroundColor:"rgba(243, 243, 243, 1)",
    borderRadius:0,
  },
  lable_Txt:{
    fontSize:16,
    lineHeight:20,
    fontWeight:400,
  },
  massageBox:{
    minWidth:240,
    height:"auto",
    paddingVertical:27,
    marginTop:10,
    paddingHorizontal:16,
    borderRightColor:"rgba(127, 127, 127, 1)",
    borderTopColor:"rgba(127, 127, 127, 1)",
    borderLeftColor:"rgba(127, 127, 127, 1)",
    borderWidth:2,
    borderRadius:6,
    borderBottomColor:"#FFF",
    borderBottomWidth:"none",
    textWrap:"wrap"
  },
  content:{
    color:"rgba(127, 127, 127, 1)",
    fontFamily:"Montserrat",
    fontSize:12,
    lineHeight:22,
    fontWeight:400,
    paddingBottom:14
  },
  contentTitle:{
    color:"rgba(252, 114, 77, 1)",
    fontSize:16,
    fontWeight:500
  }
});
