import React from "react";
import { Text, TextInput, View } from "react-native";
import GlobalStyles from "../Util/GlobalStyles";
const RegularInput = (props) => {
  return (
    <View>
        <Text style={GlobalStyles.regularInputLabel} >{props.label}</Text>
      <TextInput editable={props.editable}  onChangeText={props.onChangeFunction} defaultValue={props.defaultValue} style={GlobalStyles.regularInput} placeholder={props.placeholder} />
    </View>
  );
};

export default RegularInput;
