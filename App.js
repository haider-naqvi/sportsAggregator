import { StatusBar } from "expo-status-bar";
import {  StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/AppNavigator";
import "react-native-gesture-handler";
import Home from "./src/pages/Home";
import DrawerNavigtion from "./src/DrawerNavigation";
// import DrawerLayout from "./components/DrawerItem/layout";

export default function App() {
  return (
    // <Home/>
    <NavigationContainer>
    {/* <Drawer.Navigator initialRouteName="Home"> */}
        {/* <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
      <AppNavigator />
      {/* <DrawerNavigtion /> */}
      {/* </Drawer.Navigator> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "space-evenly ",
  },
});
