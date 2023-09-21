import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";
import Event from "../pages/Events";
import HighRish from "../pages/HighRisk";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useAnimatedStyle } from 'react-native-reanimated';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const AppNavigator = () => {
  return (
    // <NavigationContainer>
      <Stack.Navigator screenOption={{headerShown:false}}>
        <Stack.Screen
          name="home"
>
    {()=>(
        <Drawer.Navigator>
            <Drawer.Screen name="event" component={Event} />
            <Drawer.Screen name="high-risk" component={HighRish} />
        </Drawer.Navigator>
    )}
</Stack.Screen>
      </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default AppNavigator;
