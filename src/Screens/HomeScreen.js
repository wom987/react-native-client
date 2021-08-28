import React from "react";
import { Text, View } from "react-native";
import GlobalStyles from "../Util/GlobalStyles";
import RegularButton from "../Components/RegularButton";
const HomeScreen = ({ navigarion, route }) => {
  return (
    <View style={GlobalStyles.menuView}>
      <RegularButton
        title={"Menu Item"}
        style={GlobalStyles.menuButton}
        rippleColor={"#ffb0ae"}
        backColor ={"#0f0"}
        labelStyle={GlobalStyles.regularInputLabel}
      />
      <RegularButton
        title={"Menu Item"}
        style={GlobalStyles.menuButton}
        rippleColor={"#ffb0ae"}
        backColor ={"#0f0"}
        labelStyle={GlobalStyles.regularInputLabel}
      />
      <RegularButton
        title={"Menu Item"}
        style={GlobalStyles.menuButton}
        rippleColor={"#ffb0ae"}
        backColor ={"#0f0"}
        labelStyle={GlobalStyles.regularInputLabel}
      />
      <RegularButton
        title={"Menu Item"}
        style={GlobalStyles.menuButton}
        rippleColor={"#ffb0ae"}
        backColor ={"#0f0"}
        labelStyle={GlobalStyles.regularInputLabel}
      />
    </View>
  );
};

export default HomeScreen;
