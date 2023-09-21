import React from "react";
import { Text, View } from "react-native";
import { style } from "./style";
import { Avatar } from "react-native-paper";

const profileCard = () => {
  return (
    <>
      <View style={style.profileBox}>
        <View>
          <Avatar.Image
            size={128}
            source={require("../../../assets/user.png")}
          />
        </View>
        <View>
          <Text style={[style.heading, { color: "rgba(252, 114, 77, 1)" }]}>
            Profile
          </Text>
          <Text style={[style.subTitle, { paddingTop: 10 }]}>Selena Gomez</Text>
          <View style={style.listBox}>
            <View>
              <Text
                style={[style.subTitle, { color: "rgba(252, 114, 77, 1)" }]}
              >
                Age
              </Text>
            </View>
            <View>
              <Text style={[style.subTitle, { paddingLeft: 10 }]}>23</Text>
            </View>
          </View>
          <View style={style.listBox}>
            <View>
              <Text
                style={[style.subTitle, { color: "rgba(252, 114, 77, 1)" }]}
              >
                Gender
              </Text>
            </View>
            <View>
              <Text style={style.subTitle}>Female</Text>
            </View>
          </View>{" "}
          <View style={style.listBox}>
            <View>
              <Text
                style={[style.subTitle, { color: "rgba(252, 114, 77, 1)" }]}
              >
                Rating
              </Text>
            </View>
            <View>
              <Text style={style.subTitle}>
                4.3
                {[1, 2, 3, 4, 5].map(() => (
                  <Avatar.Icon
                    size={14}
                    color="rgba(240, 200, 58, 1)"
                    style={{ backgroundColor: "#FFF" }}
                    icon={"star-outline"}
                  />
                ))}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={style.context}>
        Meet The UK Horse Racing Tipster Who Averages<Text style={{color:"rgba(252, 114, 77, 1)",fontWeight:500}}> $161.3 </Text>
        Per Month And Who Has Made £93.75 This Month!
      </Text>
    </>
  );
};

export default profileCard;
