import React from 'react'
import { ScrollView, Button, View } from 'react-native'
import { LinearGradient } from 'expo'
import { connect } from 'react-redux'
import _createUser from '../redux/2_actions/userActions/createUserAction'
import _login from '../redux/2_actions/userActions/loginAction'
import { HomeScreenStyles } from '../styles/HomeScreenStyles'
import { YellowButton } from '../components/YellowButton'

class AuthScreen extends React.Component {
  state = {
    isLoggedIn: '',
  }

  componentDidMount() {
    const { navigation, isLoggedIn } = this.props
    const { navigate } = navigation

    this.setState({
      isLoggedIn,
    })

    navigate(isLoggedIn ? 'MainRoute' : 'AuthScreenRoute')
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isLoggedIn !== this.props.isLoggedIn) {
      const { navigation, isLoggedIn } = this.props
      const { navigate } = navigation

      this.setState({
        isLoggedIn,
      })

      navigate(isLoggedIn ? 'MainRoute' : 'AuthScreenRoute')
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { isLoggedIn } = nextProps

    if (isLoggedIn !== prevState.isLoggedIn) {
      return { isLoggedIn }
    } else return null
  }

  render() {
    const { _createUser, isLoggedIn, _login } = this.props
    // isLoggedIn
    return (
      <LinearGradient colors={['#2B2B2B', '#1C1C1C']} style={{ flex: 1 }}>
        <ScrollView style={HomeScreenStyles}>

            <YellowButton
              marginTop={20}
              text={'Logga in med Facebook'}
              onPress={_login('FB')} />

            <YellowButton
              marginTop={20}
              text={'Skapa användare med Facebook'}
              onPress={_createUser('FB')} />

        </ScrollView>
      </LinearGradient>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.userReducers.loginReducer.isLoggedIn,
  }
}
const mapDispatchToProps = { _createUser, _login }
const _AuthScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthScreen)
export default _AuthScreen
