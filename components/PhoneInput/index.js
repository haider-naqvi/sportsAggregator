import React, { useRef } from "react";
import PhoneInput from "react-native-phone-input";

const phoneInput = ({ onchange, value, styles }) => {
  const phoneRef = useRef(undefined);
  return (
    <PhoneInput
      style={styles}
      ref={phoneRef}
      value={value}
    //   onPressFlag={this.onPressFlag}
      initialCountry={"us"}
      initialValue="13178675309"
      textProps={{
        placeholder: "Enter a phone number...",
      }}
      onChangePhoneNumber={onchange}
    />
  );
};

export default phoneInput;
