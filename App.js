import React from 'react';
import { View, Text } from 'react-native';
import { createSwitchNavigator,createAppContainer} from 'react-navigation';
import LoginScreen from './screens/Login';
import SignIn from './screens/SignIn';

const AppSwitchNavigator = createSwitchNavigator({
  LoginScreen: LoginScreen,
  SignInScreen:SignIn

});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer/>;
  }
}
