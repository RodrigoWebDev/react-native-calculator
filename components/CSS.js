import { StyleSheet } from "react-native";

const color = {
  primary: "#dfe1e5",
  secundary: "#e74c3c"
};

export default StyleSheet.create({
  topview: {
    height: "100px"
  },
  title: {
    marginBottom: "20px",
    marginTop: "20px",
    width: "100%"
  },
  titleText: {
    fontSize: "20px",
    fontWeight: "900"
  },
  button: {
    width: "24%",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "#f1f3f4",
    backgroundColor: "#f1f3f4",
    marginBottom: "10px",
    borderRadius: "5px"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "flex-start",
    justifyContent: "space-between",
    paddingLeft: "16px",
    paddingRight: "16px",
    maxWidth: "600px",
    marginLeft: "auto",
    marginRight: "auto"
  },
  buttonOperation: {
    backgroundColor: color.primary
  },
  buttonResult: {
    backgroundColor: "#4285f4"
  },
  textWhite: {
    color: "#fff"
  },
  topview: {
    flexBasis: "100%",
    height: "40px",
    display: "flex",
    alignItems: "center",
    paddingLeft: "16px",
    paddingRight: "16px",
    justifyContent: "flex-start",
    flexDirection: "row"
  },
  topviewText: {
    flexGrow: 1
  },
  clean: {
    width: "50px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderStyle: "solid",
    borderWidth: "1px",
    backgroundColor: color.secundary,
    borderColor: color.secundary,
    borderRadius: "5px"
  },
  cleanText: {
    color: "white"
  }
});
