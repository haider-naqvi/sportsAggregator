import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { Avatar, Button, Card, List, RadioButton } from "react-native-paper";
import { style } from "./style";

const NotificartionId = () => {
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
                <View style={style.massageBox}>
                  <Text style={style.content}>
                    <Text style={style.contentTitle}>Copying bets:</Text> Once
                    you have signed up for the betting service, you will
                    receivenotifications of the bets made by the bettor you are
                    following. You can then place thesame bets in your own
                    account. This means that if the bettor places a bet on a
                    particularteam to win a football match, for example, you can
                    place the same bet in your ownaccount.
                  </Text>
                  <Text style={style.content}>
                    <Text style={style.contentTitle}> Profit or loss:</Text> The
                    success of follow trading in sports betting depends on
                    theperformance of the bettor you are following. If the
                    bettor makes successful bets, you willalso make a profit,
                    and vice versa. The profit or loss you make will be
                    proportional to the
                  </Text>
                </View>
                <View style={style.flex}>
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
                      { color: "rgba(31, 199, 151, 1)" },
                    ]}
                  >
                    Copy Bet
                  </Button>
                  <Button
                    style={style.btn}
                    labelStyle={[
                      style.lable_Txt,
                      { color: "rgba(198, 75, 75, 1)" },
                    ]}
                  >
                    Delete
                  </Button>
                </View>
              </View>
            }
          />
        </List.Accordion>
      </List.Section>
    </View>
  );
};

export default NotificartionId;
