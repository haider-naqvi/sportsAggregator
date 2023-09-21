import React from "react";
import { Avatar, Button, Card, Text } from "react-native-paper";
import { style } from "./style";
import { View } from "react-native";

const PublicCard = ({
  backgroundImage,
  userPic,
  CardTitle,
  cardSubTitle,
  followButtonAction,
  dollarText,
  roiText,
}) => {
  return (
    <Card style={{ backgroundColor: "rgba(243, 243, 243, 1)" }}>
      <View style={style.card}>
        <Card.Cover height={148} source={backgroundImage} />
        <View style={style.userPic}>
          <Avatar.Image size={100} source={userPic} />
        </View>
      </View>
      <Card.Title
        style={style.ContentBox}
        title={CardTitle}
        titleStyle={style.titleText}
        subtitle={cardSubTitle}
        subtitleStyle={style.subtext}
      />
      <Card.Content
        style={{
          background:
            " linear-gradient(350.16deg, #FC724D -70.78%, rgba(252, 114, 77, 0) 233.51%)",
          marginTop: 40,
          marginBottom: 36,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 40,
        }}
        con
      >
        <Button
          style={{ border: "none", color: "#FFF" }}
          labelStyle={style.folloBtn}
          onPress={followButtonAction}
        >
          Follow up
        </Button>
      </Card.Content>

      <View style={style.cardFooter}>
        <View>
          <Text style={style.titleText}>{dollarText}</Text>
          <Text
            style={[
              style.subtext,
              { color: "rgba(252, 114, 77, 1)", paddingTop: 5 },
            ]}
          >
            Monthly Profit
          </Text>
        </View>
        <View style={{ alignSelf: "baseline" }}>
          <Button labelStyle={[style.vistBtn, { borderRadius: 6 }]}>
            Visit Here
          </Button>
        </View>
        <View>
          <Text style={style.titleText}>{roiText}</Text>
          <Text
            style={[
              style.subtext,
              { color: "rgba(252, 114, 77, 1)", paddingTop: 5 },
            ]}
          >
            Roi
          </Text>
        </View>
      </View>
    </Card>
  );
};

export default PublicCard;
