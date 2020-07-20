import React from "react";
import {
  Keyboard,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Image,
  KeyboardAvoidingView
} from "react-native";
import { Button } from "react-native-elements";
import styles from "./loginStyle";

const LoginComponent = ({ navigation }) => {
  const [value, onChangeText] = React.useState("Useless");
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          {/* <View>
            <Image
              style={styles.logo}
              source={require("../../assets/qr.png")}
            />
          </View> */}
          <TextInput placeholder="Username" style={styles.textInput} />
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            secureTextEntry={true}
          />
          <Button
            style={styles.loginButton}
            title="LOGIN"
            onPress={() => null}
          />
          <Text
            style={styles.createAccount}
            onPress={() => onCreateAccountPress(navigation)}
          >
            Create an account
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const onCreateAccountPress = navigation => {
  navigation.navigate("Sign Up");
};

const onLoginPress = navigation => {
  // navigation.navigate("Sign Up");
};

export default LoginComponent;
