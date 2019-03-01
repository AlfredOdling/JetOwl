import React from 'react'
import { ScrollView } from 'react-native'
import { LinearGradient } from 'expo'
import { connect } from 'react-redux'
// import _logout from '../redux/2_actions/userActions/logoutAction'
import { _Space } from '../components/general/_Space'
import { ProfileSquare } from '../components/ProfileSquare'
import { CoursesSquares } from '../components/CoursesSquares'
import { About } from '../components/About'
import { Tag } from '../components/Tag'

class ProfileScreen extends React.Component {
  componentDidMount() {
    // const { _getSpecificAds, user_id } = this.props
    // _getSpecificAds(user_id)
  }

  goToPayment = () => {
    const { navigation } = this.props
    const { navigate } = navigation
    navigate('PaymentScreenRoute')
  }

  render() {
    return (
      <ScrollView>
        <LinearGradient colors={['#2B2B2B', '#1C1C1C']} style={{ padding: 40 }}>
          <ProfileSquare />
          <_Space amount={20} />
          <CoursesSquares />
          <_Space amount={20} />
          <About />

          <_Space amount={20} />
          <Tag text="Cinema 4D" />
          <_Space amount={10} />
          <Tag text="React" />
          <_Space amount={10} />
          <Tag text="React Native" />
        </LinearGradient>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {
    name: state.userReducers.loginReducer.data.user_full_name,
    user_id: state.userReducers.loginReducer.data.user_id,
  }
}
// const mapDispatchToProps = { _logout, _getSpecificAds }
const _ProfileScreen = connect(
  mapStateToProps,
  undefined
)(ProfileScreen)
export default _ProfileScreen
