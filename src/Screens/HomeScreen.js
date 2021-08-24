import React from "react";
import { Text, View } from "react-native";
import GlobalStyles from "../Util/GlobalStyles";
const HomeScreen = ({ navigarion, route }) => {
  const { data } = route.params;
  console.log(data['user'].id_rol);
  
  console.log(data['token']);
  return (
    <View style={GlobalStyles.body}>
      <Text>Home Page</Text>
    </View>
  );
};

export default HomeScreen;
