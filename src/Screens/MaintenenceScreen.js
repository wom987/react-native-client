import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import UserScreen from "./Manteinence/UserScreen";
import SubMenuScreen from "./Manteinence/SubMenuScreen";
import MenuScreen from "./Manteinence/MenuScreens";
import PermissionScreen from "./Manteinence/PermissionScreens";
const Drawer = createDrawerNavigator();
const MaintenenceScreen = () => {
  return (
    <Drawer.Navigator screenOptions={{
        headerTitleAlign: "center",
        drawerLabelStyle: {
          fontSize: 25,
          color: "#000",
        },}} initialRouteName="UserScreen">
      <Drawer.Screen name="UserScreen" component={UserScreen} />
      <Drawer.Screen name="PermissionScreen" component={PermissionScreen} />
      <Drawer.Screen name="MenuScreen" component={MenuScreen} />
      <Drawer.Screen name="SubMenuScreen" component={SubMenuScreen} />
    </Drawer.Navigator>
  );
};

export default MaintenenceScreen;
