import React, { useEffect, useState } from "react";
import {
  FlatList,
  View,
  ScrollView,
  LogBox,
  RefreshControl,
} from "react-native";
import GlobalStyles from "../Util/GlobalStyles";
import RegularButton from "../Components/RegularButton";
import ItemSubMenuView from "../Components/Views/ItemSubMenuView";
import SubMenuModal from "../Modals/SubMenuModal";
const SubMenuScreen = () => {
  const API_URL = "http://192.168.56.1/restaurante_api/public/submenu/";

  const API_URLM = "http://192.168.56.1/restaurante_api/public/menu/";
  LogBox.ignoreAllLogs();
  //states Variables
  const [nombre, setNombre] = useState("");
  const [subMenus, setSubMenus] = useState();
  const [menus, setMenus] = useState();
  const [visible, setVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadData, setLoadData] = useState(true);
  const [state, setState] = useState("");
  const [idMenu, setIdMenu] = useState("");
  const states = {
    Activo: "Activo",
    "No Activo": "No Activo",
  };

  var menuData = "";

  useEffect(() => {
    if (loadData) {
      fetch(API_URLM)
        .then((res) => res.json())
        .then((data) => setMenus(data));

      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => setSubMenus(data));

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
    if (idMenu == "" || state == "") {
      ToastAndroid.show("Seleccionar un valor!", ToastAndroid.SHORT);
    } else {
      try {
        fetch(API_URL + "store", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nombre: nombre,
            id_menu: idMenu,
            estado: state,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
      } catch (error) {
        console.log(error);
      }
      setNombre(nombre);
      setVisible(false);
    }
  };

  return (
    <View style={GlobalStyles.body}>
      <SubMenuModal
        titleModal={"Agregar Sub Menu"}
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
        state={states}
        options={menus}
        pickerState="Estado:"
        selectedState={state}
        onValueState={(itemValue, itemIndex) => {
          setState(itemValue);
        }}
        pickerLabel={"Menus"}
        selectedValue={idMenu}
        onValue={(itemValue, itemIndex) => {
          setIdMenu(itemValue);
        }}
      />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={updateData} />
        }
      >
        <FlatList
          numColumns={2}
          data={subMenus}
          extraData={() => {
            updateData;
          }}
          renderItem={({ item }) => {
            if (item.eliminado === "false") {
              return (
                <ItemSubMenuView
                  itemId={item.id}
                  card_title={item.nombre}
                  description={"Menu: "+item.menu_nombre+" \nEstado: "+item.estado}
                  onPressFuncion={updateData}
                  options={menus}
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
export default SubMenuScreen;
