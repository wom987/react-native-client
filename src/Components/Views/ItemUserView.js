import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
//navigation import
import { useNavigation } from "@react-navigation/native";
//custom components
import RegularButton from "../RegularButton";
import GlobalStyles from "../../Util/GlobalStyles";
import MenuModal from "../../Modals/MenuModal";

const ItemUserView = (props) => {
  //Fectch const
  const API_URL = "http://192.168.56.1/restaurante_api/public/users/";
  //States const
  const [nombre, setNombre] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemId, setItemId] = useState("");
  let navigation = useNavigation();
  //edit Modal show
  const onPressEditShowModal = () => {
    setShowEditModal(true);
    setNombre(props.card_title);
    setItemId(props.itemId);
  };

  const onPressEditModal = () => {
    try {
      fetch(API_URL + itemId, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre: nombre, id: itemId }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("actualizado");
        });
    } catch (error) {
      console.log(error);
    }

    setNombre(nombre);
    setShowEditModal(false);
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
      <MenuModal
        titleModal={"Actualizar Menu"}
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
      />
      {/* Delete modal */}
      <MenuModal
        titleModal={"Eliminar Menu"}
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

export default ItemUserView;
