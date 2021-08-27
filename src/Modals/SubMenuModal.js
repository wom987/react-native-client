import React, { useState } from "react";
import { Text, View, Modal } from "react-native";
import RegularInput from "../Components/RegularInput";
import RegularButton from "../Components/RegularButton";
import GlobalStyles from "../Util/GlobalStyles";
import RegularPicker from "../Components/RegularPicker";
import RegularPickerNoDatabase from "../Components/RegularPickerNoDatabase";

const ItemView = (props) => {
  let dataModal = props.visible;
  const [showModal, setShowModal] = useState(dataModal);
  const onPressShowModal = () => {
    console.log(showModal);
    setShowModal(!showModal);
    console.log(showModal);
  };

  return (
    <Modal
      style={GlobalStyles.modal_view}
      visible={props.visible}
      animationType={"fade"}
      onRequestClose={props.onRequestClose}
    >
      <View style={GlobalStyles.modal_card}>
        <View style={GlobalStyles.card_title}>
          <Text style={GlobalStyles.card_title_label}>{props.titleModal}</Text>
        </View>
        <View style={GlobalStyles.card_body}>
          <RegularInput
            onChangeFunction={props.onChangeFunction}
            defaultValue={props.defaultValue}
            label={"Nombre del Sub Menu:"}
            editable={props.editable}
          />
          <RegularPicker
            pickerLabel={props.pickerLabel}
            options={props.options}
            onValueChange={props.onValue}
            selectedValue={props.selectedValue}
            enable={props.enable}
          />
          <RegularPickerNoDatabase
            pickerLabel={props.pickerState}
            options={props.state}
            onValueChange={props.onValueState}
            selectedValue={props.selectedState}
            enable={props.enable}
          />
        </View>
        <View style={GlobalStyles.actions}>
          <RegularButton
            title={props.buttonTitle}
            style={GlobalStyles.actionButton}
            labelStyle={GlobalStyles.textAddButton}
            rippleColor={props.rippleColor}
            backColor={props.backColor}
            onPressFuncion={props.onPressFuncionEdit}
          />
          <RegularButton
            title={"Cancelar"}
            style={GlobalStyles.actionButton}
            labelStyle={GlobalStyles.textAddButton}
            rippleColor={"#BFBFBF"}
            backColor={"#808080"}
            onPressFuncion={props.onPressCancel}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ItemView;
