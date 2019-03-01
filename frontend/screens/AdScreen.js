import React from 'react'
import {
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
  Button,
} from 'react-native'
import { LinearGradient } from 'expo'

import { Hamburger } from '../components/Hamburger'
import { HomeScreenStyles } from '../styles/HomeScreenStyles'
import { _Text } from '../components/general/_Text'
import { WhiteLine } from '../components/WhiteLine'
import { ProfileBrick } from '../components/ProfileBrick'

export default class AdScreen extends React.Component {
  render() {
    return (
      <ScrollView style={HomeScreenStyles}>
        <LinearGradient
          colors={['#2B2B2B', '#1C1C1C']}
          style={{ padding: 40, flex: 1 }}>
          <Hamburger props={this.props} />

          <_Text type="mb_24_white" text="hej" />
          <WhiteLine />

          <ProfileBrick />
        </LinearGradient>
      </ScrollView>
    )
  }
}
