import { StyleSheet } from "react-native";
const fontSize = 30;
const bottonWidth = 250;
const bottonHeight = 70;
const inputWidth = 400;
const inputHeight = 70;
export default StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  leftbody: {},
  regularInput: {
    width: inputWidth,
    height: inputHeight,
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 5,
    backgroundColor: "#fff",
    fontSize: fontSize,
    marginTop: 20,
    paddingLeft: 10,
  },
  regularInputLabel: {
    marginTop: 10,
    fontSize: fontSize,
  },
  primaryButton: {
    width: bottonWidth,
    height: bottonHeight,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "#0275d8",
    margin: 20,
  },
  primaryButtonLabel: {
    fontSize: fontSize,
    color: "#fff",
    paddingRight: 9,
  },
  addButton: {
    width: bottonWidth,
    height: bottonHeight,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    margin: 20,
  },
  textAddButton: {
    fontSize: fontSize,
    color: "#fff",
  },
  actionButton: {
    width: "90%",
    height: bottonHeight,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 40,
  },
  modal_card: {
    width: "50%",
    height: "auto",
    margin: "25%",
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  modal_view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card_title: {
    height: 40,
    margin: 10,
    fontWeight: "bold",
  },
  card_title_label: {
    fontSize: 35,
    fontWeight: "bold",
  },
  card_body: {
    margin: 10,
  },
  warning_button: {
    width: "30%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "#0275d8",
    margin: 10,
  },
  actions: {
    flexDirection: "row",
  },
  card_body_label: {
    marginTop: 20,
    fontSize: fontSize,
  },
  card: {
    width: "auto",
    height: "auto",
    maxWidth: 350,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  container_view: {
    margin: 20,
  },
  regularPicker:{
    width:"100%",
    height:40,
    padding:30,
    marginTop:10,
    marginBottom:10,
    fontSize:35,
    backgroundColor:"#e1e8ff"

  },pickerItem:{
    fontSize:fontSize
  }
});
