import React from "react";
import { View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../pages/Home";
import Event from "../pages/Events";
import Header from "../../components/Header";
import DrawerMenu from "../../components/DrawerItem";

const Drawer = createDrawerNavigator();

function DrawerNavigtion() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="home" component={Home}  option={{headerShown:true}} />
      <Drawer.Screen name="event" component={Event} option={{headerShown:true}} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigtion;
