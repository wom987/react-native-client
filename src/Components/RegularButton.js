import React from "react";
import { Pressable, View, Text } from "react-native";

const RegularButton = (props) => {
  return (
    <View style={{marginLeft:props.marginLeft}}>
      <Pressable
        style={[props.style,{backgroundColor:props.backColor}]}
        android_ripple={{color:props.rippleColor }}      
        onPress={props.onPressFuncion}
        
      >
        <Text style={props.labelStyle}> {props.title}</Text>
      </Pressable>
    </View>
  );
};

export default RegularButton;
