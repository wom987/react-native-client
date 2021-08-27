import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ToastAndroid } from "react-native";
import { Picker } from "@react-native-picker/picker";
//navigation import
import { useNavigation } from "@react-navigation/native";
//custom components
import RegularButton from "../RegularButton";
import GlobalStyles from "../../Util/GlobalStyles";
import SubMenuModal from "../../Modals/SubMenuModal";

const ItemMenuView = (props) => {
  //Fectch const
  const API_URL = "http://192.168.56.1/restaurante_api/public/submenu/";
  //States const
  const [nombre, setNombre] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemId, setItemId] = useState("");
  const [idMenu, setIdMenu] = useState("");
  const [state, setState] = useState("");
  const [loadData, setLoadData] = useState(true);

  let navigation = useNavigation();

  //edit Modal show
  const onPressEditShowModal = () => {
    setShowEditModal(true);
    setNombre(props.card_title);
    setItemId(props.itemId);
  };
  const states = {
    Activo: "Activo",
    "No Activo": "No Activo",
  };
  const onPressEditModal = () => {
    if (idMenu == "" || state == "") {
      ToastAndroid.show("Seleccionar un valor!", ToastAndroid.SHORT);
    } else {
      try {
        fetch(API_URL + itemId, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nombre: nombre,
            id: itemId,
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
      setShowEditModal(false);
    }
  };
  //delete modal show
  const onPressDeleteShowModal = () => {
    setShowDeleteModal(true);
    setNombre(props.card_title);
    setItemId(props.itemId);
  };
  const onPressDeleteModal = () => {
    try {
      fetch(API_URL + itemId, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Eliminado");
        });
    } catch (error) {
      console.log(error);
    }
    setNombre(nombre);
    setShowDeleteModal(false);
  };
  //Cancel button
  const onPressCancelModal = () => {
    setShowDeleteModal(false);
    setShowEditModal(false);
  };
  const functionCombineEdit = () => {
    onPressEditModal();
    props.onPressFuncion();
  };
  const functionCombineDelete = () => {
    onPressDeleteModal();
    props.onPressFuncion();
  };
  return (
    <View style={GlobalStyles.container_view}>
      {/*Modals Components */}
      {/* Edit modal */}
      <SubMenuModal
        titleModal={"Actualizar Sub Menu"}
        visible={showEditModal}
        ShowEditModal={false}
        onChangeFunction={(value) => {
          setNombre(value);
        }}
        onRequestClose={() => {
          setShowEditModal(false);
        }}
        defaultValue={nombre}
        onPressFuncionEdit={functionCombineEdit}
        onPressCancel={onPressCancelModal}
        buttonTitle={"Editar"}
        rippleColor={"#bfffbf"}
        backColor={"#5cb85c"}
        state={states}
        options={props.options}
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
      {/* Delete modal */}
      <SubMenuModal
        titleModal={"Eliminar Sub Menu"}
        visible={showDeleteModal}
        editable={false}
        ShowEditModal={false}
        onChangeFunction={(value) => {
          setNombre(value);
        }}
        onRequestClose={() => {
          setShowDeleteModal(false);
        }}
        defaultValue={nombre}
        onPressFuncionEdit={functionCombineDelete}
        onPressCancel={onPressCancelModal}
        buttonTitle={"Eliminar"}
        rippleColor={"#ffb0ae"}
        backColor={"#d9534f"}
        state={states}
        options={props.options}
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
        enable={false}
      />

      {/*Item components */}
      <View style={GlobalStyles.card}>
        <View style={GlobalStyles.card_title}>
          <Text style={GlobalStyles.card_title_label}>{props.card_title}</Text>
        </View>
        <View style={GlobalStyles.card_body}>
          <Text style={GlobalStyles.card_body_label}>{props.description}</Text>
        </View>
        <View style={GlobalStyles.actions}>
          <RegularButton
            title={"Editar"}
            style={GlobalStyles.actionButton}
            labelStyle={GlobalStyles.textAddButton}
            rippleColor={"#bfffbf"}
            backColor={"#5cb85c"}
            onPressFuncion={onPressEditShowModal}
          />
          <RegularButton
            title={"Eliminar"}
            style={GlobalStyles.actionButton}
            labelStyle={GlobalStyles.textAddButton}
            rippleColor={"#ffb0ae"}
            backColor={"#d9534f"}
            onPressFuncion={onPressDeleteShowModal}
          />
        </View>
      </View>
    </View>
  );
};

export default ItemMenuView;
