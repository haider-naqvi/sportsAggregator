import React, { useState } from "react";
import { View, Image, Text, FlatList } from "react-native";
import { Drawer, IconButton, Icon, Button } from "react-native-paper";
import { style } from "./style";
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const list = [
  {
    icon: "home-outline",
    title: "Home",
  },
  {
    icon: "calendar-check-outline",
    title: "Events",
  },
  {
    icon: "account-star-outline",
    title: "Expert Bettors  ",
  },
  {
    icon: "account-group-outline",
    title: "players",
  },
  {
    icon: "home",
    title: "Settings",
  },
  {
    icon: "home",
    title: "Logout",
  },
];

const DrawerMenu = (props) => {
  const [active, setActive] = useState("");

  return (
    // <Drawer.Section style={[style.container]} showDivider={showDivider} >
    //   <View style={style.iconBox}>
    //     <IconButton
    //       icon="arrow-left-thin"
    //       iconColor="#FFF"
    //       size={20}
    //       onPress={close}
    //     />
    //   </View>
    //   <View style={style.sidebarBox}>
    //     <View style={style.userBox}>
    //       <Image
    //         source={require("../../assets/user.png")}
    //         style={style.userPic}
    //       />
    //       <View style={style.edit}>
    //         <IconButton icon="pencil-outline" iconColor="#FFF" size={14} />
    //       </View>
    //       <Text style={style.userName}>Wenesday Adam</Text>
    //     </View>
    //     <View style={{ marginTop: 54 }}>
    //       <FlatList
    //         data={list}
    //         renderItem={({ item }) => (
    //           <>
    //             <Button
    //               icon={item.icon}
    //               mode={active === item.title && "contained"}
    //               onPress={() => setActive(item.title)}
    //               size={24}
    //               contentStyle={{
    //                 justifyContent: "flex-start",
    //                 alignItems: "center",
    //                 gap: 36,
    //               }}
    //             >
    //               <Text style={style.itemText}>{item.title}</Text>
    //             </Button>
    //           </>
    //         )}
    //         // keyExtractor={(item) => item.icon}
    //       />
    //     </View>
    //   </View>
    // </Drawer.Section>
    <DrawerContentScrollView {...props}>
    <DrawerItemList {...props} />
    <DrawerItem
      label="Close drawer"
      onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
    />
    <DrawerItem
      label="Toggle drawer"
      onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
    />
  </DrawerContentScrollView>
    
  );
};

export default DrawerMenu;
