import React from 'react'
import { ScrollView, Button, View } from 'react-native'
import { LinearGradient } from 'expo'
import { connect } from 'react-redux'
import _createUser from '../redux/2_actions/userActions/createUserAction'
import _login from '../redux/2_actions/userActions/loginAction'
import { HomeScreenStyles } from '../styles/HomeScreenStyles'
import { YellowButton } from '../components/YellowButton'
// import { viewWidth } from '../styles/utils'
import { _Space } from '../components/general/_Space'

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
    // onPress={_login('FB')}
    // onPress={_createUser('FB')}

    return (
      <LinearGradient
        colors={['#2B2B2B', '#1C1C1C']}
        style={{ flex: 1, padding: 40 }}>
        <ScrollView style={HomeScreenStyles}>
          <_Space amount={100} />
          <YellowButton text={'Skapa användare med Facebook'} />
          <_Space amount={40} />
          <YellowButton hollow text={'Logga in med Facebook'} />
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
