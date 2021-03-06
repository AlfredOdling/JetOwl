import React from 'react'
import {
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Button,
} from 'react-native'
import { LinearGradient } from 'expo'

import { Hamburger } from '../components/Hamburger'
import { Box } from '../components/Box'
import { CTAButton } from '../components/CTAButton'
import { AttentionText } from '../components/AttentionText'
import { HomeScreenStyles } from '../styles/HomeScreenStyles'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <ScrollView style={HomeScreenStyles}>
        <LinearGradient colors={['#2B2B2B', '#1C1C1C']} style={{ padding: 40 }}>
          <Hamburger props={this.props} />
          <AttentionText />
          <CTAButton />
          <Box index={1} />
          <Box index={2} />
          <Box index={3} />
        </LinearGradient>
      </ScrollView>
    )
  }
}
