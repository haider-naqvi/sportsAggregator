import React, { useEffect, useRef } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Checkbox } from 'react-native-paper';
import { style } from "./style";
import { ScrollView } from "react-native-web";
import PhoneInput from "../PhoneInput/index";

const SignUp = () => {
  return (
    <SafeAreaView style={style.scrool}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <View style={style.container}>
          <View>
            <Text style={style.mainHeading}>Sign Up</Text>
          </View>

          <View style={{ height: 84 }}>
            <Text style={style.label}>Name</Text>
            <View style={style.inputBox}>
              <TextInput
                style={[style.textField, { width: 140 }]}
                placeholder="First Name"
              />
              <TextInput
                style={[style.textField, { width: 140 }]}
                placeholder="Last Name"
              />
            </View>
          </View>
          <View style={style.formBox}>
            <View>
              <Text style={style.label}>Email Address </Text>
              <TextInput style={style.textField} placeholder="Email Address" />
            </View>
            <View>
              <Text style={style.label}> Contact Number</Text>
              <PhoneInput  value={"us"} styles={style.textField}/>
            </View>
            <View>
              <Text style={style.label}>Password </Text>
              <TextInput style={style.textField} placeholder="Your Password" />
            </View>
            <View style={style.checkBox}>
              <View style={style.checkBoxText}>
                <Checkbox style={style.checkBoxInput} />
                <Text style={style.checkText}>Remember me</Text>
              </View>
              <View style={style.forgotText}>
                <>Forget Password</>
              </View>
            </View>
            <TouchableOpacity style={style.signInBtn}>
              <>Sign In</>
            </TouchableOpacity>
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
              Don’t have an account yet?
              <Text style={{ color: "rgba(252, 114, 77, 1)" }}>Sign Up.</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
