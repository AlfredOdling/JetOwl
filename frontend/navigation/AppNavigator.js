import React from 'react'
// import { Platform } from 'react-native'
import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
  createAppContainer,
} from 'react-navigation'

import HomeScreen from '../screens/HomeScreen'
import SignupLoginScreen from '../screens/SignupLoginScreen'

const HomeStack = createStackNavigator({
  SignupLoginScreenRoute: SignupLoginScreen,
  HomeScreenRoute: HomeScreen,
})

HomeStack.navigationOptions = {
  tabBarLabel: 'Hem',
}

const MainDrawerNavigator = createDrawerNavigator({
  HomeStack,
})

// For authentication
const SwitchNavigator = createSwitchNavigator(
  {
    // AuthLoadingScreenRoute: AuthLoadingScreen,
    // AuthScreenRoute: AuthScreen,
    MainRoute: MainDrawerNavigator,
  },
  {
    initialRouteName: 'MainRoute',
  }
)

export default createAppContainer(SwitchNavigator)
