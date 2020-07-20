import { StyleSheet } from "react-native";

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row"
  },
  inner: {
    padding: 24,
    flex: 1
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#eaeaea",
    backgroundColor: "#fafafa",
    marginBottom: 20
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12,
    borderRadius: 5
  },
  logo: {
    height: "40%",
    width: "40%",
    left: "30%",
    top: "15%",
    alignItems: "center",
    justifyContent: "center"
  },
  createAccount: {
    height: 45,
    marginTop: 10,
    color: "#0077b3",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center"
  }
});

export default loginStyles;
