import React from 'react'
// import { Platform } from 'react-native'
import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
} from 'react-navigation'

import HomeScreen from '../screens/HomeScreen'
import SignupLogin from '../screens/SignupLogin'

const HomeStack = createStackNavigator({
  SignupLoginRoute: SignupLogin,
  HomeScreenRoute: HomeScreen,
})

HomeStack.navigationOptions = {
  tabBarLabel: 'Hem',
}

const MainDrawerNavigator = createDrawerNavigator({
  HomeStack,
})

// For authentication
export default createSwitchNavigator(
  {
    // AuthLoadingScreenRoute: AuthLoadingScreen,
    // AuthScreenRoute: AuthScreen,
    MainRoute: MainDrawerNavigator,
  },
  {
    initialRouteName: 'MainRoute',
  }
)
