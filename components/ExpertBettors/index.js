import React, { useState } from "react";
import { ImageBackground, View, Text } from "react-native";
import { style } from "./style";
import Header from "../Header";
import { Button, Divider } from "react-native-paper";
import PublicCard from "../cards/publicCard";

const ExpertBettors = () => {
  const btnList = [
    {
      key: 1,
      title: "High-Risk Profile",
    },
    {
      key: 2,
      title: "Med-Risk Profile",
    },
    {
      key: 3,
      title: "Low-Risk Profile",
    },
  ];
  const [active, setActive] = useState("High-Risk Profile");

  console.log(active, "haider");
  return (
    <View style={style.pageContainer}>
      {/* <Header /> */}
      <View>
        <ImageBackground
          style={style.bgImage}
          source={require("../../assets/Rectangle 3966.png")}
        >
          <View style={style.btnBox}>
            {btnList.map((item) => (
              <Button
                key={item.key}
                style={[
                  style.styleBtn,
                  active == item.title && {
                    borderColor: "rrgba(252, 114, 77, 1)ed",
                  },
                ]}
                contentStyle={[
                  style.tabBtn,
                  active == item.title && {
                    borderColor: "rrgba(252, 114, 77, 1)ed",
                  },
                ]}
                labelStyle={[
                  style.labelBtnText,
                  active == item.title && { color: "rrgba(252, 114, 77, 1)ed" },
                ]}
                mode="outlined"
                onPress={() => setActive(item.title)}
              >
                {item.title}
              </Button>
            ))}
          </View>
        </ImageBackground>
        <View style={style.wrapper}>
          <View style={style.headingBox}>
            <Divider style={style.dividerStyle} />
            <Text style={style.heading}>{active}</Text>
            <Text style={style.subHeading}>
              Featured cash markets{" "}
              <Text style={{ color: "rgba(252, 114, 77, 1)" }}>Learn More</Text>
            </Text>
          </View>
          {active == "High-Risk Profile" && (
            <PublicCard
              backgroundImage={require("../../assets/card/Rectangle 3892.png")}
              userPic={require("../../assets/card/Ellipse 970.png")}
              CardTitle={"Wenesday Adam"}
              cardSubTitle={"Nfl Racing tipster"}
              dollarText={"$5700.00"}
              roiText={"19.088%"}
            />
          )}
          {active == "Med-Risk Profile" && (
            <PublicCard
              backgroundImage={require("../../assets/card/Rectangle 3899.png")}
              userPic={require("../../assets/card/Ellipse 972.png")}
              CardTitle={"Wenesday Adam"}
              cardSubTitle={"Nfl Racing tipster"}
              dollarText={"$5700.00"}
              roiText={"19.088%"}
            />
          )}
          {active == "Low-Risk Profile" && (
            <PublicCard
              backgroundImage={require("../../assets/card/Rectangle 3902.png")}
              userPic={require("../../assets/card/Ellipse 971.png")}
              CardTitle={"Wenesday Adam"}
              cardSubTitle={"Nfl Racing tipster"}
              dollarText={"$5700.00"}
              roiText={"19.088%"}
            />
          )}
          <View style={[style.btnBox,{marginTop:41,justifyContent:"center"}]}>
            <Button
              style={[
                style.styleBtn,
                {
                  borderColor: "rrgba(252, 114, 77, 1)ed",
                },
              ]}
              contentStyle={[
                style.tabBtn,
                {
                  borderColor: "rrgba(252, 114, 77, 1)ed",
                },
              ]}
              labelStyle={[
                style.labelBtnText,
                { color: "rrgba(252, 114, 77, 1)ed", width: 100 },
              ]}
              mode="outlined"
            >
              More
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ExpertBettors;
