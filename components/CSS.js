import { StyleSheet } from "react-native";

const color = {
  primary: "#dfe1e5",
  secundary: "#e74c3c"
};

export default StyleSheet.create({
  topview: {
    height: 100
  },
  title: {
    marginBottom: 20,
    marginTop: 20,
    width: "100%"
  },

  titleText: {
    fontSize: 20,
    fontWeight: "900"
  },
  button: {
    width: "24%",
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#f1f3f4",
    backgroundColor: "#f1f3f4",
    marginBottom: 10,
    borderRadius: 5
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "flex-start",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 16,
    maxWidth: 600,
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
    height: 40,
    display: "flex",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: "flex-start",
    flexDirection: "row"
  },
  topviewText: {
    flexGrow: 1
  },
  clean: {
    width: 50,
    height: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: color.secundary,
    borderColor: color.secundary,
    borderRadius: 5
  },
  cleanText: {
    color: "white"
  }
});
