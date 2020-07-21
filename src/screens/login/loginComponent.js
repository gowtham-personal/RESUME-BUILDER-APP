import React, { useState } from "react";
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
  const [state, setState] = useState({ email: "", password: "" });

  const onCreateAccountPress = navigation => {
    navigation.navigate("Sign Up");
  };

  const onLoginPress = navigation => {
    // navigation.navigate("Sign Up");
    console.log("login data", state);
  };

  const handleChange = (e, name) => {
    const { text } = e.nativeEvent;
    setState(prevState => ({
      ...prevState,
      [name]: text
    }));
  };

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
          <TextInput
            placeholder="Email"
            style={styles.textInput}
            name="email"
            onChange={e => handleChange(e, "email")}
          />
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            name="password"
            secureTextEntry={true}
            onChange={e => handleChange(e, "password")}
          />
          <Button
            style={styles.loginButton}
            title="LOGIN"
            onPress={() => onLoginPress()}
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

export default LoginComponent;
