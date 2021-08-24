import React, { useState, useEffect } from "react";
import {
  FlatList,
  View,
  ScrollView,
  LogBox,
  RefreshControl,
} from "react-native";
import GlobalStyles from "../Util/GlobalStyles";
import RegularButton from "../Components/RegularButton";
import ItemMenuView from "../Components/ItemMenuView";
import MenuModal from "../Modals/MenuModal";
const MenuScreen = ({ navigation, route }) => {
  const API_URL = "http://192.168.56.1/restaurante_api/public/menu/";
  LogBox.ignoreAllLogs();
  //states Variables
  const [nombre, setNombre] = useState("");
  const [menus, setMenus] = useState();
  const [visible, setVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadData, setLoadData] = useState(true);

  useEffect(() => {
    if (loadData) {
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => setMenus(data));
      if (menus) {
        setIsLoading(false);
      }
      setLoadData(false);
    }
  }, [loadData]);
  const updateData = () => {
    //console.log(refreshing)
    setLoadData(true);
    console.log(loadData);
  };
  const showAddModal = () => {
    setVisible(true);
  };
  const cancelAddModal = () => {
    setVisible(false);
  };
  const sendDataLaravel = () => {
    console.log(nombre);
    try {
      fetch(API_URL + "store", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre: nombre }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("agregado");
          setLoadData(true);
        });
    } catch (error) {
      console.log(error);
    }
    setNombre(nombre);
    setVisible(false);
  };

  return (
    <View style={GlobalStyles.body}>
      <MenuModal
        titleModal={"Agregar Menu"}
        visible={visible}
        ShowEditModal={false}
        buttonTitle={"Agregar"}
        rippleColor={"#bfffbf"}
        backColor={"#5cb85c"}
        onPressCancel={cancelAddModal}
        onChangeFunction={(value) => {
          setNombre(value);
        }}
        onPressFuncionEdit={sendDataLaravel}
      />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={updateData} />
        }
      >
        <FlatList
          numColumns={2}
          data={menus}
          extraData={() => {
            updateData;
          }}
          renderItem={({ item }) => {
            if (item.eliminado === "false") {
              return (
                <ItemMenuView
                  itemId={item.id}
                  card_title={item.nombre}
                  description={""}
                  onPressFuncion={updateData}
                />
              );
            } else {
              ("");
            }
          }}
          keyExtractor={({ item, id }) => id.toString()}
        />
      </ScrollView>
      <RegularButton
        title={"Agregar"}
        style={GlobalStyles.addButton}
        labelStyle={GlobalStyles.textAddButton}
        marginLeft={"-55%"}
        rippleColor={"#bfffbf"}
        backColor={"#5cb85c"}
        onPressFuncion={showAddModal}
      />
    </View>
  );
};

export default MenuScreen;
