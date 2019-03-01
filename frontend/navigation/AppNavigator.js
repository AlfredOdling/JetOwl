import React from 'react'
// import { Platform } from 'react-native'
import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
  createAppContainer,
} from 'react-navigation'

import HomeScreen from '../screens/HomeScreen'
import FeedScreen from '../screens/FeedScreen'
import SignupLoginScreen from '../screens/SignupLoginScreen'
import AuthScreen from '../screens/AuthScreen'
import AuthLoadingScreen from '../screens/AuthLoadingScreen'
import AdScreen from '../screens/AdScreen'
import ProfileScreen from '../screens/ProfileScreen'
import OfferCourseScreen from '../screens/OfferCourseScreen'

// import { DrawerContent } from '../components/DrawerContent'

// const HomeStack = createStackNavigator({
//   OfferCourseScreenRoute: OfferCourseScreen,
//   ProfileScreenRoute: ProfileScreen,
//   AdScreenRoute: AdScreen,
//   FeedScreenRoute: FeedScreen,
//   HomeScreenRoute: HomeScreen,
//   AuthScreenRoute: AuthScreen,
//   SignupLoginScreenRoute: SignupLoginScreen,
// })

// HomeStack.navigationOptions = {
//   tabBarLabel: 'Hem',
// }

// import DrawerContent here
const MainDrawerNavigator = createDrawerNavigator(
  {
    HomeScreenRoute: HomeScreen,
    AuthScreenRoute: AuthScreen,
    SignupLoginScreenRoute: SignupLoginScreen,
    FeedScreenRoute: FeedScreen,
    OfferCourseScreenRoute: OfferCourseScreen,
    AdScreenRoute: AdScreen,
    ProfileScreenRoute: ProfileScreen,
  },
  {
    tabBarLabel: 'Hem',
    drawerBackgroundColor: '#1C1C1CF5',
  }
)

// ---------------*************** MAIN NAV ****************------------------

// For authentication
const SwitchNavigator = createSwitchNavigator(
  {
    AuthLoadingScreenRoute: AuthLoadingScreen,
    AuthScreenRoute: AuthScreen,
    MainRoute: MainDrawerNavigator,
  },
  {
    initialRouteName: 'MainRoute',
  }
)

export default createAppContainer(SwitchNavigator)
