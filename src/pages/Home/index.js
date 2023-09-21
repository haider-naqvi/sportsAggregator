import React, { useEffect } from "react";
import { View,Text } from "react-native";

const Home = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("event");
    },2000);
  }, []);
  return (<View style={{flex:1}}>
  <Text>Home</Text></View>);
};

export default Home;
