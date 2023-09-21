import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { Checkbox } from 'react-native-paper';
import { style } from "./style";

const SignIn = () => {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={style.container}>
      <View>
        <Text style={style.mainHeading}>Sign In</Text>
      </View>
      <View style={{ height: 84 }}>
        <Text style={style.label}>Email Address or phone Number</Text>
        <TextInput
          value={"name"}
          style={[style.textField]}
          placeholder="Email Address or Phone number"
        />
      </View>
      <View>
        <Text style={style.label}>Password</Text>
        <TextInput
          value="email"
          style={[style.textField]}
          placeholder="Your password"
        />
        <View style={style.checkBox}>
          <View style={style.checkBoxText}>
            <Checkbox
              style={style.checkBoxInput}
              value={isSelected}
              onValueChange={setSelection}
            />
            <Text style={style.checkText}>Remember me</Text>
          </View>
          <View style={style.forgotText}>Forget Password</View>
        </View>
        <TouchableOpacity style={style.signInBtn}>Sign In</TouchableOpacity>
      </View>
      <Text style={[style.checkText, { fontSize: 16 }]}>or</Text>
      <View style={style.iconContainer}>
        <View style={style.iconBox}>
          <Image
            style={style.icon}
            source={require("../../assets/gogle.png")}
          />
        </View>
        <View style={style.iconBox}>
          <Image
            style={style.icon}
            source={require("../../assets/tiwter.png")}
          />
        </View>
        <View style={style.iconBox}>
          <Image
            style={style.icon}
            source={require("../../assets/facebook.png")}
          />
        </View>
      </View>
      <View>
        <Text style={style.accountText}>
          Don’t have an account yet?{" "}
          <Text style={{ color: "rgba(252, 114, 77, 1)" }}>Sign Up.</Text>
        </Text>
      </View>
    </View>
  );
};

export default SignIn;
