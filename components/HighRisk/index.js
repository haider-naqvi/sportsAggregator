import React from "react";
import Header from "../Header";
import { Text, View } from "react-native";
import { style } from "./style";
import ProfileCard from "../cards/userProfile";
import { Button } from "react-native-paper";

const HighRisk = () => {
  const ratingCompleted = (rating) => {
    console.log("Rating is: " + rating);
  };
  return (
    <>
      <Header />
      <View style={style.wrapper}>
        <View style={style.headingBox}>
          <Text style={style.heading}>High-Risk Profile</Text>
          <Text style={style.subHeading}>
            Featured cash markets
            <Text style={{ color: "rgba(252, 114, 77, 1)" }}>Learn More</Text>
          </Text>
        </View>
        <ProfileCard />
        <View style={style.btnBox}>
          <Button
            mode="outlined"
            style={[
              style.styleBtn,
              {
                borderColor: "rgba(127, 127, 127, 1)",
              },
            ]}
            contentStyle={[
              style.tabBtn,
              {
                borderColor: "rgba(127, 127, 127, 1)",
              },
            ]}
            labelStyle={[
              style.labelBtnText,
              { color: "rgba(127, 127, 127, 1)", width: 120 },
            ]}
          >
            Copy Bet
          </Button>
          <Button
            mode="outlined"
            style={[
              style.styleBtn,
              {
                borderColor: "rgba(127, 127, 127, 1)",
              },
            ]}
            contentStyle={[
              style.tabBtn,
              {
                borderColor: "rgba(127, 127, 127, 1)",
              },
            ]}
            labelStyle={[
              style.labelBtnText,
              { color: "rgba(127, 127, 127, 1)", width: 120 },
            ]}
          >
            Follow{" "}
          </Button>
        </View>
      </View>
    </>
  );
};

export default HighRisk;
