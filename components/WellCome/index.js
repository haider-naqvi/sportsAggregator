import React from "react";
import { View, Text } from "react-native";
import { style } from "./style";
import { Button, Icon } from "@rneui/themed";

const WellCome = () => {
  return (
    <View style={style.container}>
      <View>
        <Text style={style.logo}>Logo</Text>
      </View>
      <View style={style.welcomeBox}>
        <Text style={style.welcomeText}>Welcome</Text>
        <Text style={style.welcomePrha}>
          invest your money and change your life
        </Text>
      </View>
      <View>
        <Button
          icon={<Icon solid />}
          mode="contained"
          color={"rgba(252, 114, 77, 1)"}
          radius={8}
          loadingProps={true}
          buttonStyle={style.btn}
          onPress={() => console.log("Pressed")}
        >
          Get started
        </Button>
      </View>
    </View>
  );
};

export default WellCome;
