import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
//Navigation dependecies
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//Screen  references
import LoginScreen from "./src/Screens/LoginScreen";
import HomeScreen from "./src/Screens/HomeScreen";
import MenuScreen from "./src/Screens/Manteinence/MenuScreens";
import SubMenuScreen from "./src/Screens/Manteinence/SubMenuScreen";
import MaintenenceScreen from "./src/Screens/MaintenenceScreen";
export default function App() {
  //Drawer const
  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();

  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: "center",
          drawerLabelStyle: {
            fontSize: 25,
            color: "#000",
          },
        }}
      >
        <Stack.Screen
          name="Login"
          screenOptions={{
            unmountOnBlur: true,
            cardStyleInterpolator: forFade,
          }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Home"
          screenOptions={{ unmountOnBlur: true }}
          component={HomeScreen}
        />
        <Stack.Screen
          options={({ navigation }) => ({ unmountOnBlur: true }),{title:"Menu"}}
          name="MenuScreen"
          component={MenuScreen}
        />
        <Stack.Screen
          options={({ navigation }) => ({ unmountOnBlur: true }),{title:"Sub Menu"}}
          name="SubMenuScreen"
          component={SubMenuScreen}
        />
        <Stack.Screen
          options={({ navigation }) => ({ unmountOnBlur: true }),{title:"Mantenimiento"}}
          name="MaintenenceScreen"
          component={MaintenenceScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
