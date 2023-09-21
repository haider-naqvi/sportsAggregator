import React, { useState } from "react";
import { View } from "react-native";
import { style } from "./style";
import { Appbar, Badge } from "react-native-paper";
import { Platform } from "react-native";
import DrawerMenu from "../DrawerItem";

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";
const Header = ({ bgColor, backBtn, bellICon, userIcon }) => {
  const [open, setOpen] = useState(false);
  return (
    <View style={style.headerBox}>
      <Appbar.Header style={{ backgroundColor: "rgba(255, 255, 255, 0.25)" }}>
        {/* {backBtn && ( */}
          <View style={style.iconBox}>
            <Appbar.BackAction iconColor="#FFF" size={30} onPress={() => {}} />
          </View>
        {/* )} */}
        <Appbar.Action
          icon="menu"
          color={bgColor && "rgba(252, 114, 77, 1)"}
          onPress={() => setOpen(true)}
        />
        {/* {userIcon && ( */}
          <Appbar.Action icon="account-plus-outline" onPress={() => {}} />
        {/* )} */}
        {/* {bellICon && ( */}
          <>
            <Appbar.Action
              icon="bell-outline"
              
              color="rgba(252, 114, 77, 1)"
              onPress={() => {}}
            />
            {/* <Badge>6</Badge> */}

          </>
        {/* )} */}
      </Appbar.Header>
      {open && <DrawerMenu />}
    </View>
  );
};

export default Header;
