import { StyleSheet } from "react-native"

export default StyleSheet.create({
  topview: {
    height: "100px",
  },
  button: {
    width: "25%",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "#00000020"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "flex-start"
  },
  buttonOperation: {
    backgroundColor: "#dfe1e5"
  },
  buttonResult: {
    backgroundColor: "#4285f4",
  },
  textWhite: {
    color: "#fff"
  },
});