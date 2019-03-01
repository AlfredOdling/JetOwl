import React from 'react'
import { Platform, StatusBar, Text } from 'react-native'
import { AppLoading, Asset, Font, Icon, LinearGradient } from 'expo'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import AppNavigator from './navigation/AppNavigator'
import configureStore from './redux/store'

const { store, persistor } = configureStore()
export const getStore = () => store

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  }
  // const { navigationState, dispatch } = this.props
  // navigation={addNavigationHelpers({ dispatch, state })}

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      )
    } else {
      return (
        <LinearGradient colors={['#2B2B2B', '#1C1C1C']} style={{ flex: 1 }}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <Provider store={store}>
            <PersistGate
              loading={<Text>Loading...</Text>}
              persistor={persistor}>
              <AppNavigator />
            </PersistGate>
          </Provider>
        </LinearGradient>
      )
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        // require('./assets/images/add.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
      }),
    ])
  }

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error)
  }

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true })
  }
}
