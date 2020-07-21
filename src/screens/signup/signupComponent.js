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
import styles from "../login/loginStyle";

const SignUpComponent = ({ navigation }) => {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
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
          <TextInput placeholder="Email" style={styles.textInput} />
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            secureTextEntry={true}
          />
          <TextInput placeholder="Confirm Password" style={styles.textInput} />
          <Button
            style={styles.loginButton}
            title="Sign Up"
            onPress={() => null}
          />
          <Text
            style={styles.createAccount}
            onPress={() => navigation.goBack()}
          >
            Back to login
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUpComponent;
