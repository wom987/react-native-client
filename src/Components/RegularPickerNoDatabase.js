import React, { useState } from "react";
import { Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import GlobalStyles from "../Util/GlobalStyles";

const RegularPicker = (props) => {
  return (
    <View>
      <Text style={GlobalStyles.regularInputLabel}>{props.pickerLabel}</Text>
      <Picker
        style={GlobalStyles.regularPicker}
        selectedValue={props.selectedValue}
        onValueChange={props.onValueChange}
        enabled={props.enable}
      >
        <Picker.Item
          style={GlobalStyles.pickerItem}
          label="Seleccione un valor..."
          value=""
        />
        {Object.keys(props.options).map((key) => {
          return (
            <Picker.Item
              style={GlobalStyles.pickerItem}
              label={props.options[key]}
              value={props.options[key]}
              key={key}
            />
          ); //if you have a bunch of keys value pair
        })}
      </Picker>
    </View>
  );
};

export default RegularPicker;
