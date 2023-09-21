import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { Avatar, Button, List, RadioButton } from "react-native-paper";
import { style } from "./style";

const Notifecation = () => {
  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <View style={style.wrapper}>
      <List.Section>
        <List.Accordion
          title={"Ralph Edwards"}
          titleStyle={[
            style.title_Style,
            { fontWeight: 600, fontSize: 14, paddingBottom: 5 },
          ]}
          descriptionStyle={style.title_Style}
          right={(props) => (
            <Text style={style.right_txt} {...props}>
              {"now"}
            </Text>
          )}
          left={(props) => (
            <View style={{ position: "relative" }}>
              <Avatar.Image
                size={38}
                source={require("../../assets/notification/user-one.png")}
                {...props}
              />
              <Avatar.Image
                size={16}
                style={{ position: "absolute", left: 40, top: 25 }}
                source={require("../../assets/notification/message.png")}
              />
            </View>
          )}
          expanded={expanded}
          style={{ backgroundColor: "#FFF", borderTopColor: "#fff" }}
          description={"Low-Risk Profile"}
          onPress={handlePress}
        >
          <List.Item
            style={{ paddingLeft: 0 }}
            title={
              <View>
                <View
                  style={[
                    style.flex,
                    {
                      alignItems: "center",
                      gap: 7,
                    },
                  ]}
                >
                  <RadioButton status="checked" color="rgba(102, 91, 235, 1)" />
                  <Text style={style.sport_text}>Sports Aggregator </Text>
                </View>
                <View
                  style={[
                    style.flex,
                    {
                      justifyContent: "space-between",
                      width: 370,
                    },
                  ]}
                >
                  <View>
                    <Text style={[style.massage_title]}>Hi Anastassia!</Text>
                    <Text
                      style={[
                        style.massage_title,
                        { color: "rgba(104, 104, 104, 1)", fontSize: 13 },
                      ]}
                    >
                      Lorem ipsum dolor sit amet
                      <Text style={{ color: "rgba(252, 114, 77, 1)" }}>
                        {" "}
                        more
                      </Text>
                    </Text>
                  </View>
                  <View>
                    <Image
                      source={require("../../assets/notification/largeIcon.png")}
                      size={36}
                      style={{ borderRadius: 6 }}
                    />
                  </View>
                </View>
                <View style={[style.flex, { marginTop: 14 }]}>
                  <Button
                    style={[
                      style.btn,
                      {
                        borderRightColor: "rgba(217, 217, 217, 1)",
                        borderWidth: 2,
                      },
                    ]}
                    labelStyle={[
                      style.lable_Txt,
                      { color: "rgba(252, 114, 77, 1)" },
                    ]}
                    icon={"content-copy"}
                  >
                    Copy Bet
                  </Button>
                  <Button
                    style={style.btn}
                    labelStyle={[
                      style.lable_Txt,
                      { color: "rgba(104, 104, 104, 1)" },
                    ]}
                    icon={require("../../assets/notification/emial.png")}
                  >
                    ignore
                  </Button>
                </View>
              </View>
            }
          />

          {/* <List.Item title="Second item" /> */}
        </List.Accordion>
        <List.Accordion
          title={"Ralph Edwards"}
          titleStyle={[
            style.title_Style,
            { fontWeight: 600, fontSize: 14, paddingBottom: 5 },
          ]}
          descriptionStyle={style.title_Style}
          right={(props) => (
            <Text style={style.right_txt} {...props}>
              {"43s"}
            </Text>
          )}
          left={(props) => (
            <View style={{ position: "relative" }}>
              <Avatar.Image
                size={38}
                source={require("../../assets/notification/user-two.png")}
                {...props}
              />
              <Avatar.Image
                size={16}
                style={{ position: "absolute", left: 40, top: 25 }}
                source={require("../../assets/notification/message.png")}
              />
            </View>
          )}
          expanded={expanded}
          style={{ backgroundColor: "#FFF", borderTopColor: "#fff" }}
          description={"Low-Risk Profile"}
          onPress={handlePress}
        >
          <List.Item
            style={{ paddingLeft: 0 }}
            title={
              <View>
                <View
                  style={[
                    style.flex,
                    {
                      alignItems: "center",
                      gap: 7,
                    },
                  ]}
                >
                  <RadioButton status="checked" color="rgba(102, 91, 235, 1)" />
                  <Text style={style.sport_text}>Sports Aggregator </Text>
                </View>
                <View
                  style={[
                    style.flex,
                    {
                      justifyContent: "space-between",
                      width: 370,
                    },
                  ]}
                >
                  <View>
                    <Text style={[style.massage_title]}>Hi Anastassia!</Text>
                    <Text
                      style={[
                        style.massage_title,
                        { color: "rgba(104, 104, 104, 1)", fontSize: 13 },
                      ]}
                    >
                      Lorem ipsum dolor sit amet
                      <Text style={{ color: "rgba(252, 114, 77, 1)" }}>
                        {" "}
                        more
                      </Text>
                    </Text>
                  </View>
                  <View>
                    <Image
                      source={require("../../assets/notification/largeIcon.png")}
                      size={36}
                      style={{ borderRadius: 6 }}
                    />
                  </View>
                </View>
                <View style={[style.flex, { marginTop: 14 }]}>
                  <Button
                    style={[
                      style.btn,
                      {
                        borderRightColor: "rgba(217, 217, 217, 1)",
                        borderWidth: 2,
                      },
                    ]}
                    labelStyle={[
                      style.lable_Txt,
                      { color: "rgba(252, 114, 77, 1)" },
                    ]}
                    icon={"content-copy"}
                  >
                    Copy Bet
                  </Button>
                  <Button
                    style={style.btn}
                    labelStyle={[
                      style.lable_Txt,
                      { color: "rgba(104, 104, 104, 1)" },
                    ]}
                    icon={require("../../assets/notification/emial.png")}
                  >
                    ignore
                  </Button>
                </View>
              </View>
            }
          />

          {/* <List.Item title="Second item" /> */}
        </List.Accordion>
        <List.Accordion
          title={"Sports Aggregator "}
          titleStyle={[
            style.title_Style,
            {
              fontWeight: 600,
              fontSize: 12,
              paddingBottom: 5,
              color: "rgba(252, 114, 77, 1)",
            },
          ]}
          descriptionStyle={style.title_Style}
          right={(props) => (
            <Text style={style.right_txt} {...props}>
              {"60s"}
            </Text>
          )}
          left={(props) => (
            <View style={{ position: "relative" }}>
              <Avatar.Image
                size={38}
                source={require("../../assets/notification/user-one.png")}
                {...props}
              />
              <Avatar.Image
                size={16}
                style={{ position: "absolute", left: 40, top: 25 }}
                source={require("../../assets/notification/message.png")}
              />
            </View>
          )}
          expanded={!expanded}
          style={{ backgroundColor: "#FFF", borderTopColor: "#fff" }}
          description={"Can you bring a big salad? I’m on dessert duty."}
          onPress={handlePress}
        ></List.Accordion>
      </List.Section>
    </View>
  );
};

export default Notifecation;
