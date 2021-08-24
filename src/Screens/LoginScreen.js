import React, { useState } from "react";
import { Text, View } from "react-native";
import RegularButton from "../Components/RegularButton";
//Components import
import RegularInput from "../Components/RegularInput";
//Global StyleSheet
import GlobalStyles from "../Util/GlobalStyles";
//
const LoginScreen = ({ navigation }) => {
  //states variables
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const variables
  const API_URL = "http://192.168.56.1/restaurante_api/public/";

  const validateLogin = () => {
    try {
      fetch(API_URL + "login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, password: password }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          navigation.navigate("Home", {
            data: data,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  const showCorreo = () => {};
  return (
    <View style={GlobalStyles.body}>
      <View>
        <RegularInput
          label={"Ingrese su usuario"}
          placeholder={"usuario example"}
          onChangeFunction={(value) => {
            setUsername(value);
          }}
        />
        <RegularInput
          label={"Ingrese su contraseña"}
          placeholder={"contraseña"}
          onChangeFunction={(value) => {
            setPassword(value);
          }}
        />
      </View>
      <RegularButton
        title={"Iniciar Session"}
        style={GlobalStyles.primaryButton}
        labelStyle={GlobalStyles.primaryButtonLabel}
        onPressFuncion={validateLogin}
        rippleColor={"#bfffbf"}
        backColor={"#5cb85c"}
      />
    </View>
  );
};

export default LoginScreen;
