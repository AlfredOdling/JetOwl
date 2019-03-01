import React from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { LinearGradient } from 'expo'

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    const { navigation, isLoggedIn } = this.props
    const { navigate } = navigation

    navigate(isLoggedIn ? 'MainRoute' : 'AuthScreenRoute')
  }

  render() {
    return (
      <LinearGradient colors={['#2B2B2B', '#1C1C1C']} style={{ flex: 1 }}>
        <View style={HomeScreenStyles}>
          <Text>Vänta lite, kollar ifall du är inloggad...</Text>
        </View>
      </LinearGradient>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.userReducers.loginReducer.isLoggedIn,
  }
}
const _AuthLoadingScreen = connect(
  mapStateToProps,
  undefined
)(AuthLoadingScreen)
export default _AuthLoadingScreen
