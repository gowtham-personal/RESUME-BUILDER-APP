import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginComponent from "../screens/login/loginComponent";
import SignUpComponent from "../screens/signup/signupComponent";
const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginComponent} />
        <Stack.Screen name="Sign Up" component={SignUpComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
